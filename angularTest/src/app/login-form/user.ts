export class User{
    id: number;
    username: string;
    password: string;

    constructor(username: string, password: string){
        this.id = Math.random() * 100000000000000000;
        this.username = username;
        this.password = password;
    }
} 