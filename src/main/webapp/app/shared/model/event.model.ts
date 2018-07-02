import { Moment } from 'moment';
import { IProfile } from 'app/shared/model//profile.model';
import { IAssociation } from 'app/shared/model//association.model';

export interface IEvent {
    id?: number;
    name?: string;
    description?: string;
    picture?: string;
    location?: string;
    startDate?: Moment;
    endDate?: Moment;
    recurrence?: number;
    participants?: IProfile[];
    associations?: IAssociation[];
}

export class Event implements IEvent {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public picture?: string,
        public location?: string,
        public startDate?: Moment,
        public endDate?: Moment,
        public recurrence?: number,
        public participants?: IProfile[],
        public associations?: IAssociation[]
    ) {}
}
