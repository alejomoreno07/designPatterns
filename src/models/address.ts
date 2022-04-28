
class Address {
    private _coordinates:string;
    private _addressDescription:string;

    constructor(coordinates:string, addressDescription:string) {
        this._addressDescription = addressDescription;
        this._coordinates = coordinates;
    }

    get coordinates(){
        return this._coordinates;
    }

    get addressDescription() {
        return this._addressDescription;
    }

    set coordinates(coordinates:string) {
        this._coordinates = coordinates;
    }

    set addressDescription(addressDescription:string) {
        this._addressDescription = addressDescription;
    }
}

export default Address;
