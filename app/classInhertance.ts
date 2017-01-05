/**
 * Created by Mihir.Desai on 6/21/2016.
 */
import {Utility} from "./Utility";
interface IBase {
    id : number;
}

interface IDerived {
  name : string;
  print() : void;
}

class Base implements IBase {
    id : number;
    constructor(id : number);
    constructor(id : string);
    constructor(id : any) {
        this.id = id;
    }

    _id() : string {
        return "id:" + this.id;
    }

}

export class DerivedClass extends Base implements IDerived {
    name : string;
    constructor(id : number,name : string);
    constructor(id : string,name : string);
    constructor(id : any, name : any) {
        /*this.id = id;*/
        super(id);
        this.name = name;
    }

    _name() : string {
        return "name:" + this.name;
    }

    print() : void  {
        Utility.log("Derived Inheritance from class - ",super._id(),",",this._name());
    }
}
