import { Settings } from '.';

export interface Profile {
    id: string; // from user id
    firstname: string;
    lastname: string;
    email: string;
    img?: string;
    settings: Settings;
}
