import {Utility} from "./Utility";
/**
 * Created by Mihir.Desai on 6/22/2016.
 */
export class ClassWithModifiers {
    private _id : number;
    private _name : string;
    constructor(id: number, name : string) {
        this._id = id;
        this._name = name;
    }

    set id(id : number) {
        this._id = id;
    }

    get id() {
        return this._id;
    }

    print() : void {
        Utility.log("ClassWithModifiers - id:" + this._id + ",name:"+this._name);
    }

}