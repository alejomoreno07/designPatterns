import Address from "./address"

class User {
    private _name:string;
    private _address?:Address;
    private _phone?: string;
    private _lastName?: string;

    constructor(name:string) {
        this._name = name;
    }

    public set address(address:Address | undefined) {
        this._address = address;
    }

    public get address():Address | undefined {
        return this._address;
    }

    public set phone(phone: string | undefined ) {
        this._phone = phone;
    }

    public get phone():string | undefined {
        return this._phone;
    }

    public set lastName(lastName: string | undefined) {
        this._lastName = lastName;
    }

    public get lastName():string | undefined {
        return this._lastName;
    }

    public set name(name:string) {
        this._name = name;
    }

    public get name():string {
        return this._name;
    }
}

export default User;