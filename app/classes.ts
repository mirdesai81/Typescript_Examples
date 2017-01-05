/**
 * Created by Mihir.Desai on 6/20/2016.
 */
import {Utility} from "./Utility"
import {callback} from "./functions";
interface IObject {
    id : number;
    name: string;
    print() : void;
    usingTheAnyKeyword(arg1 : any) : any;
    usingTheOptionalParams(arg1? : number) ;
    usingDefaultParams(defaultParams : number);
    usingRest(...args : number[]);
    usingCallback(callback : (id : number) => string);
}

export class ComplexType implements IObject {
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
        Utility.log("id:",this.id," , name:",this.name);
    }

    usingTheAnyKeyword(arg1 : any) : any {
        this.id = arg1;
    }

    usingTheOptionalParams(arg1? : number) {
        if(arg1){
            this.id = arg1;
        }
    }

    usingDefaultParams(defaultParams : number = 0) {
        this.id = defaultParams;
    }

    usingRest(...args : number[]) {
        if(args.length > 0) {
            this.id = args[0];
        }
    }

    usingCallback(callback : (id : number) => string) {
        callback(this.id);
    }
}
