import { IProfile } from 'app/shared/model//profile.model';

export interface IRole {
    id?: number;
    title?: string;
    description?: string;
    profiles?: IProfile[];
    associationId?: number;
}

export class Role implements IRole {
    constructor(
        public id?: number,
        public title?: string,
        public description?: string,
        public profiles?: IProfile[],
        public associationId?: number
    ) {}
}
