import { BaseEntity, User } from './../../shared';

export class BloodPressure implements BaseEntity {
    constructor(
        public id?: number,
        public date?: any,
        public systolic?: number,
        public diastolic?: number,
        public bloodPressureUser?: User,
    ) {
    }
}
