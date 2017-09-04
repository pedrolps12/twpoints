import { browser, element, by, $ } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';
const path = require('path');

describe('Weight e2e test', () => {

    let navBarPage: NavBarPage;
    let weightDialogPage: WeightDialogPage;
    let weightComponentsPage: WeightComponentsPage;
    const fileToUpload = '../../../../main/webapp/content/images/logo-jhipster.png';
    const absolutePath = path.resolve(__dirname, fileToUpload);
    

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Weights', () => {
        navBarPage.goToEntity('weight');
        weightComponentsPage = new WeightComponentsPage();
        expect(weightComponentsPage.getTitle()).toMatch(/twpointsApp.weight.home.title/);

    });

    it('should load create Weight dialog', () => {
        weightComponentsPage.clickOnCreateButton();
        weightDialogPage = new WeightDialogPage();
        expect(weightDialogPage.getModalTitle()).toMatch(/twpointsApp.weight.home.createOrEditLabel/);
        weightDialogPage.close();
    });

    it('should create and save Weights', () => {
        weightComponentsPage.clickOnCreateButton();
        weightDialogPage.setDateInput('2000-12-31');
        expect(weightDialogPage.getDateInput()).toMatch('2000-12-31');
        weightDialogPage.setWeightInput('5');
        expect(weightDialogPage.getWeightInput()).toMatch('5');
        weightDialogPage.weightUserSelectLastOption();
        weightDialogPage.save();
        expect(weightDialogPage.getSaveButton().isPresent()).toBeFalsy();
    }); 

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class WeightComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-weight div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class WeightDialogPage {
    modalTitle = element(by.css('h4#myWeightLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    dateInput = element(by.css('input#field_date'));
    weightInput = element(by.css('input#field_weight'));
    weightUserSelect = element(by.css('select#field_weightUser'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setDateInput = function (date) {
        this.dateInput.sendKeys(date);
    }

    getDateInput = function () {
        return this.dateInput.getAttribute('value');
    }

    setWeightInput = function (weight) {
        this.weightInput.sendKeys(weight);
    }

    getWeightInput = function () {
        return this.weightInput.getAttribute('value');
    }

    weightUserSelectLastOption = function () {
        this.weightUserSelect.all(by.tagName('option')).last().click();
    }

    weightUserSelectOption = function (option) {
        this.weightUserSelect.sendKeys(option);
    }

    getWeightUserSelect = function () {
        return this.weightUserSelect;
    }

    getWeightUserSelectedOption = function () {
        return this.weightUserSelect.element(by.css('option:checked')).getText();
    }

    save() {
        this.saveButton.click();
    }

    close() {
        this.closeButton.click();
    }

    getSaveButton() {
        return this.saveButton;
    }
}
