/**
 * Created by Mihir.Desai on 6/20/2016.
 */
import {Utility} from "./Utility";
export function addNumber(a : number, b : number) : number {
    return a + b;
}

export function callingFunc(name : string, cb : (text : string) => void) {
    //Utility.log("My calling function name - ",name);
    cb(name);
}

export function callback(text : string) {
    Utility.log("My callback returned - ",text);
}

export function funcOverload(a : number, b : number) : number;
export function funcOverload(a : string, b : string) : string;
export function funcOverload(a : boolean, b : boolean) : boolean;
export function funcOverload(a : any, b : any) : any {
    return a + b;
}

export function addWithUnion( a : string | number , b : string | number ) {
    return a + b;
}

type stringNumOrBool = string | number;

export function addWithType( a : stringNumOrBool, b : stringNumOrBool) : stringNumOrBool{
    return a + b;
}

type callbackType = (string) => void;

export function callingFuncWithType(name : string, cb : callbackType) {
    //Utility.log("My calling function name - ",name);
    cb(name);
}
