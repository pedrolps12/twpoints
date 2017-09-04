import { BaseEntity, User } from './../../shared';

const enum Units {
    'kg',
    'lb'
}

export class Setting implements BaseEntity {
    constructor(
        public id?: number,
        public weeklyGoal?: number,
        public weightUnits?: Units,
        public settingUser?: User,
    ) {
    }
}
