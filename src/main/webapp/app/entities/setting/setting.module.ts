import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TwpointsSharedModule } from '../../shared';
import { TwpointsAdminModule } from '../../admin/admin.module';
import {
    SettingService,
    SettingPopupService,
    SettingComponent,
    SettingDetailComponent,
    SettingDialogComponent,
    SettingPopupComponent,
    SettingDeletePopupComponent,
    SettingDeleteDialogComponent,
    settingRoute,
    settingPopupRoute,
} from './';

const ENTITY_STATES = [
    ...settingRoute,
    ...settingPopupRoute,
];

@NgModule({
    imports: [
        TwpointsSharedModule,
        TwpointsAdminModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        SettingComponent,
        SettingDetailComponent,
        SettingDialogComponent,
        SettingDeleteDialogComponent,
        SettingPopupComponent,
        SettingDeletePopupComponent,
    ],
    entryComponents: [
        SettingComponent,
        SettingDialogComponent,
        SettingPopupComponent,
        SettingDeleteDialogComponent,
        SettingDeletePopupComponent,
    ],
    providers: [
        SettingService,
        SettingPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TwpointsSettingModule {}
