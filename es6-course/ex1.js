class User {
    constructor(email, pw){
        this.email = email;
        this.pw = pw;
        this.admin = false;
    }

    isAdmin(){
        return this.admin;
    }
}

class Admin extends User {
    constructor(email, pw) {
        super(email, pw);
        this.admin = true;
    }
}

const User1 = new User('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true