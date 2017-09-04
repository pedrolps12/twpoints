import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TwpointsPointsModule } from './points/points.module';
import { TwpointsWeightModule } from './weight/weight.module';
import { TwpointsBloodPressureModule } from './blood-pressure/blood-pressure.module';
import { TwpointsSettingModule } from './setting/setting.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        TwpointsPointsModule,
        TwpointsWeightModule,
        TwpointsBloodPressureModule,
        TwpointsSettingModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TwpointsEntityModule {}
