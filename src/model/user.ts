import { Charity } from "./charity";

export class User {
    userID: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    myProjects: Array<Charity> = [];
    totalDonated: number = 0;

}