import { User, Address } from "."

class UserBuilder {
    private user:User;

    constructor(name:string) {
        this.user = new User(name);
    }

    public setAddress(address:Address):UserBuilder {
        this.user.address = address;
        return this;
    }

    public setPhone(phone:string):UserBuilder {
        this.user.phone = phone;
        return this;
    }

    public setLastName(lastName:string):UserBuilder {
        this.user.lastName = lastName;
        return this;
    }

    public getUser():User {
        return this.user;
    }


}

export default UserBuilder;