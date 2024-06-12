import { Injectable } from "@angular/core";

export interface User {
    id: number;
    email: string;
    password: string;
    date: Date;
    address?: string;
}

@Injectable()
export class UserService {

    currentUser: User = UserService.dummyUserList[0];

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

        UserService.dummyUserList.forEach(user => {
            if(user.id == id) {
                foundUser = user;
            }
        });

        this.currentUser = foundUser;
        return foundUser;
    }

    getUser(userEmail: string): User {
        this.currentUser = UserService.dummyUserList.find(userToFind => 
            userToFind.email == userEmail)!;
            return this.currentUser;
    }

    isPasswordCorrect(userEmail: string, password: string): boolean {
        return UserService.dummyUserList.find(userToFind => 
            (userToFind.email == userEmail && userToFind.password == password)) != undefined;
    }

    registerUser(email: string, password: string, date: Date): User {
        var maxId: number = 0;
        UserService.dummyUserList.forEach(user => {
                if (maxId < user.id) {
                    maxId = user.id
                }
            });

            var id = ++maxId;
            var user: User = {id, email, password, date};

            UserService.dummyUserList.push(user);

            this.currentUser = user;
            return user;
    }
}