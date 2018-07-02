import { IRole } from 'app/shared/model//role.model';
import { ICategory } from 'app/shared/model//category.model';
import { IEvent } from 'app/shared/model//event.model';
import { IProfile } from 'app/shared/model//profile.model';

export interface IAssociation {
    id?: number;
    name?: string;
    description?: string;
    picture?: string;
    address?: string;
    postcode?: string;
    city?: string;
    presidentId?: number;
    roles?: IRole[];
    categories?: ICategory[];
    events?: IEvent[];
    members?: IProfile[];
    typeId?: number;
}

export class Association implements IAssociation {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public picture?: string,
        public address?: string,
        public postcode?: string,
        public city?: string,
        public presidentId?: number,
        public roles?: IRole[],
        public categories?: ICategory[],
        public events?: IEvent[],
        public members?: IProfile[],
        public typeId?: number
    ) {}
}
