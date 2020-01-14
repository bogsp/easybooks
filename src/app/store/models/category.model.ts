import { Types } from './types.model';

export interface Category {
    id: string;
    name: string;
    desciption: string;
    types: Types[];
}
