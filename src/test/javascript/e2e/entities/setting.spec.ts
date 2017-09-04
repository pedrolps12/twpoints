import { browser, element, by, $ } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';
const path = require('path');

describe('Setting e2e test', () => {

    let navBarPage: NavBarPage;
    let settingDialogPage: SettingDialogPage;
    let settingComponentsPage: SettingComponentsPage;
    const fileToUpload = '../../../../main/webapp/content/images/logo-jhipster.png';
    const absolutePath = path.resolve(__dirname, fileToUpload);
    

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Settings', () => {
        navBarPage.goToEntity('setting');
        settingComponentsPage = new SettingComponentsPage();
        expect(settingComponentsPage.getTitle()).toMatch(/twpointsApp.setting.home.title/);

    });

    it('should load create Setting dialog', () => {
        settingComponentsPage.clickOnCreateButton();
        settingDialogPage = new SettingDialogPage();
        expect(settingDialogPage.getModalTitle()).toMatch(/twpointsApp.setting.home.createOrEditLabel/);
        settingDialogPage.close();
    });

    it('should create and save Settings', () => {
        settingComponentsPage.clickOnCreateButton();
        settingDialogPage.setWeeklyGoalInput('5');
        expect(settingDialogPage.getWeeklyGoalInput()).toMatch('5');
        settingDialogPage.weightUnitsSelectLastOption();
        settingDialogPage.settingUserSelectLastOption();
        settingDialogPage.save();
        expect(settingDialogPage.getSaveButton().isPresent()).toBeFalsy();
    }); 

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class SettingComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-setting div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class SettingDialogPage {
    modalTitle = element(by.css('h4#mySettingLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    weeklyGoalInput = element(by.css('input#field_weeklyGoal'));
    weightUnitsSelect = element(by.css('select#field_weightUnits'));
    settingUserSelect = element(by.css('select#field_settingUser'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setWeeklyGoalInput = function (weeklyGoal) {
        this.weeklyGoalInput.sendKeys(weeklyGoal);
    }

    getWeeklyGoalInput = function () {
        return this.weeklyGoalInput.getAttribute('value');
    }

    setWeightUnitsSelect = function (weightUnits) {
        this.weightUnitsSelect.sendKeys(weightUnits);
    }

    getWeightUnitsSelect = function () {
        return this.weightUnitsSelect.element(by.css('option:checked')).getText();
    }

    weightUnitsSelectLastOption = function () {
        this.weightUnitsSelect.all(by.tagName('option')).last().click();
    }
    settingUserSelectLastOption = function () {
        this.settingUserSelect.all(by.tagName('option')).last().click();
    }

    settingUserSelectOption = function (option) {
        this.settingUserSelect.sendKeys(option);
    }

    getSettingUserSelect = function () {
        return this.settingUserSelect;
    }

    getSettingUserSelectedOption = function () {
        return this.settingUserSelect.element(by.css('option:checked')).getText();
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
