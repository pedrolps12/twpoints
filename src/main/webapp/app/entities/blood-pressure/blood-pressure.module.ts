import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TwpointsSharedModule } from '../../shared';
import { TwpointsAdminModule } from '../../admin/admin.module';
import {
    BloodPressureService,
    BloodPressurePopupService,
    BloodPressureComponent,
    BloodPressureDetailComponent,
    BloodPressureDialogComponent,
    BloodPressurePopupComponent,
    BloodPressureDeletePopupComponent,
    BloodPressureDeleteDialogComponent,
    bloodPressureRoute,
    bloodPressurePopupRoute,
} from './';

const ENTITY_STATES = [
    ...bloodPressureRoute,
    ...bloodPressurePopupRoute,
];

@NgModule({
    imports: [
        TwpointsSharedModule,
        TwpointsAdminModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        BloodPressureComponent,
        BloodPressureDetailComponent,
        BloodPressureDialogComponent,
        BloodPressureDeleteDialogComponent,
        BloodPressurePopupComponent,
        BloodPressureDeletePopupComponent,
    ],
    entryComponents: [
        BloodPressureComponent,
        BloodPressureDialogComponent,
        BloodPressurePopupComponent,
        BloodPressureDeleteDialogComponent,
        BloodPressureDeletePopupComponent,
    ],
    providers: [
        BloodPressureService,
        BloodPressurePopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TwpointsBloodPressureModule {}
