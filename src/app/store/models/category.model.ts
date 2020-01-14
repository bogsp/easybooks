import { Types } from './types.model';

export interface Category {
    id: string;
    name: string;
    description: string;
    types: Types[];
    index: number;
}
