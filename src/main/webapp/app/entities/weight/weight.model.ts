import { BaseEntity, User } from './../../shared';

export class Weight implements BaseEntity {
    constructor(
        public id?: number,
        public date?: any,
        public weight?: number,
        public weightUser?: User,
    ) {
    }
}
