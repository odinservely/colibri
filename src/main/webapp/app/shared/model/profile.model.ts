import { Moment } from 'moment';
import { IEvent } from 'app/shared/model//event.model';
import { IAssociation } from 'app/shared/model//association.model';

export interface IProfile {
    id?: number;
    birthDate?: Moment;
    address?: string;
    postcode?: string;
    city?: string;
    phone?: string;
    userId?: number;
    associationId?: number;
    roleId?: number;
    categoryId?: number;
    events?: IEvent[];
    associations?: IAssociation[];
}

export class Profile implements IProfile {
    constructor(
        public id?: number,
        public birthDate?: Moment,
        public address?: string,
        public postcode?: string,
        public city?: string,
        public phone?: string,
        public userId?: number,
        public associationId?: number,
        public roleId?: number,
        public categoryId?: number,
        public events?: IEvent[],
        public associations?: IAssociation[]
    ) {}
}
