/**
 * Created by Mihir.Desai on 6/21/2016.
 */
import {Utility} from "./Utility";
interface IBase {
    id : number;
    print() : void;
}

interface IDerivedBase extends IBase {
    name : string;
}

export class Derived implements IDerivedBase {
    id : number;
    name : string;
    constructor(id : number,name : string);
    constructor(id : string,name : string);
    constructor(id : any, name : any) {
        this.id = id;
        this.name = name;
    }
    /*constructor(public id :number,public name : string) {

     }*/
    print() : void  {
        Utility.log("Derived Inheritance from multiple interface - id:",this.id," , name:",this.name);
    }

}


