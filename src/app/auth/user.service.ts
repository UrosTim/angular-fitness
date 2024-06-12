import { Injectable } from "@angular/core";

export interface User {
    id: number;
    email: string;
    password: string;
    date: Date;
}

@Injectable()
export class UserService {
    static dummyUserList: Array<User> = [
        {
            id: 1,
            email: "admin@example.com",
            password: "password",
            date: new Date("2024-04-18 14:23")
        },
        {
            id: 1,
            email: "prvi@example.com",
            password: "password",
            date: new Date("2024-04-19 14:23")
        },
        {
            id: 1,
            email: "test@example.com",
            password: "password",
            date: new Date("2024-05-18 14:23")
        },
    ]

    getUserName(user: User): string {
        return user.email;
    }

    getUserById(id: number): User {
        var foundUser !: User;

        UserService.dummyUserList.forEach((user) => {
            if(user.id == id) {
                foundUser = user;
            }
        });

        return foundUser;
    }
}