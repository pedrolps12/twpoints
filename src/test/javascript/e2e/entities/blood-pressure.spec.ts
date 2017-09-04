import { browser, element, by, $ } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';
const path = require('path');

describe('BloodPressure e2e test', () => {

    let navBarPage: NavBarPage;
    let bloodPressureDialogPage: BloodPressureDialogPage;
    let bloodPressureComponentsPage: BloodPressureComponentsPage;
    const fileToUpload = '../../../../main/webapp/content/images/logo-jhipster.png';
    const absolutePath = path.resolve(__dirname, fileToUpload);
    

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load BloodPressures', () => {
        navBarPage.goToEntity('blood-pressure');
        bloodPressureComponentsPage = new BloodPressureComponentsPage();
        expect(bloodPressureComponentsPage.getTitle()).toMatch(/twpointsApp.bloodPressure.home.title/);

    });

    it('should load create BloodPressure dialog', () => {
        bloodPressureComponentsPage.clickOnCreateButton();
        bloodPressureDialogPage = new BloodPressureDialogPage();
        expect(bloodPressureDialogPage.getModalTitle()).toMatch(/twpointsApp.bloodPressure.home.createOrEditLabel/);
        bloodPressureDialogPage.close();
    });

    it('should create and save BloodPressures', () => {
        bloodPressureComponentsPage.clickOnCreateButton();
        bloodPressureDialogPage.setDateInput('2000-12-31');
        expect(bloodPressureDialogPage.getDateInput()).toMatch('2000-12-31');
        bloodPressureDialogPage.setSystolicInput('5');
        expect(bloodPressureDialogPage.getSystolicInput()).toMatch('5');
        bloodPressureDialogPage.setDiastolicInput('5');
        expect(bloodPressureDialogPage.getDiastolicInput()).toMatch('5');
        bloodPressureDialogPage.bloodPressureUserSelectLastOption();
        bloodPressureDialogPage.save();
        expect(bloodPressureDialogPage.getSaveButton().isPresent()).toBeFalsy();
    }); 

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class BloodPressureComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-blood-pressure div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class BloodPressureDialogPage {
    modalTitle = element(by.css('h4#myBloodPressureLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    dateInput = element(by.css('input#field_date'));
    systolicInput = element(by.css('input#field_systolic'));
    diastolicInput = element(by.css('input#field_diastolic'));
    bloodPressureUserSelect = element(by.css('select#field_bloodPressureUser'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setDateInput = function (date) {
        this.dateInput.sendKeys(date);
    }

    getDateInput = function () {
        return this.dateInput.getAttribute('value');
    }

    setSystolicInput = function (systolic) {
        this.systolicInput.sendKeys(systolic);
    }

    getSystolicInput = function () {
        return this.systolicInput.getAttribute('value');
    }

    setDiastolicInput = function (diastolic) {
        this.diastolicInput.sendKeys(diastolic);
    }

    getDiastolicInput = function () {
        return this.diastolicInput.getAttribute('value');
    }

    bloodPressureUserSelectLastOption = function () {
        this.bloodPressureUserSelect.all(by.tagName('option')).last().click();
    }

    bloodPressureUserSelectOption = function (option) {
        this.bloodPressureUserSelect.sendKeys(option);
    }

    getBloodPressureUserSelect = function () {
        return this.bloodPressureUserSelect;
    }

    getBloodPressureUserSelectedOption = function () {
        return this.bloodPressureUserSelect.element(by.css('option:checked')).getText();
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
