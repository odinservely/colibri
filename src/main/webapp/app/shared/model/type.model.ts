import { IAssociation } from 'app/shared/model//association.model';

export interface IType {
    id?: number;
    title?: string;
    description?: string;
    picture?: string;
    associations?: IAssociation[];
}

export class Type implements IType {
    constructor(
        public id?: number,
        public title?: string,
        public description?: string,
        public picture?: string,
        public associations?: IAssociation[]
    ) {}
}
