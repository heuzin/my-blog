import { ObjectId } from 'mongodb';

export interface User {
    id: ObjectId;
    firstName: string;
    lastName: string;
    email: string;
    favorites: any[];
    isAdmin: boolean;
}
