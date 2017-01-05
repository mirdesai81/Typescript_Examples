/**
 * Created by Mihir.Desai on 6/20/2016.
 */
import {Utility} from "./Utility";
import {User} from "./User";
import {DoorState,DoorStateConst} from "./enums";
import {addNumber,callingFunc,callback,funcOverload,addWithUnion,addWithType} from "./functions";
import {concat,concatWithDefaultParam} from "./OptionalParams";
import {callingFuncWithType} from "./functions";
import {ComplexType} from "./classes";
import {Derived} from "./interfaceInheritance";
import {DerivedClass} from "./classInhertance";
import {PersonFactory} from "./factory/PersonFactory";
import {IPerson} from "./factory/Person";
import {ClassWithModifiers} from "./classModifiers";
import {Concatenator} from "./Concat";
import {PersonDetails} from "./factory/PersonDetails";



let user : User = new User("Mihir", "Desai");
/*alert(user.hello());*/
Utility.log(user.hello());

Utility.log("DoorState.Open = ",DoorState.Open);
Utility.log("DoorState['Closed'] = ",DoorState["Closed"]);
Utility.log("DoorState[2] = ",DoorState[2]);

Utility.log("DoorStateConst.Open = ",DoorStateConst.Open);
// Utility.log("DoorStateConst[2] = ",DoorStateConst[2]); // will result in compile error
Utility.log("addNumber(1,2) = ",addNumber(1,2));
//Utility.log("addNumber('1','2') = ",addNumber('1','2')); // will generate compile error
Utility.log("concat('1','2','3') = ", concat('1','2','3'));
Utility.log("concat('1','2') = ", concat('1','2'));
Utility.log("concat('1') = ", concat('1'));

Utility.log("concatWithDefaultParam('1','2','3') = ", concatWithDefaultParam('1','2','3'));
Utility.log("concatWithDefaultParam('1','2') = ", concatWithDefaultParam('1','2'));
Utility.log("concatWithDefaultParam('1') = ", concatWithDefaultParam('1'));
callingFunc('callingFunc',callback);
/*
Utility.log("callingFunc('callingFunc',callback) = ", );*/
Utility.log("funcOverload(1,2) = ",funcOverload(1,2));
Utility.log("funcOverload('1','2') = ",funcOverload('1','2'));
Utility.log("funcOverload(true,true) = ",funcOverload(true,false));

Utility.log("addWithUnion(1,'2') = ",addWithUnion(1,'2'));
Utility.log("addWithUnion(1,2) = ",addWithUnion(1,2));
Utility.log("addWithUnion('2','1') = ",addWithUnion('2','1'));

Utility.log("addWithType(1,'2') = ",addWithType(1,'2'));
callingFuncWithType('callingFuncWithType',callback);

var complexType = new ComplexType(1,'mihir desai');
complexType.print();

complexType = new ComplexType("2","mihir desai");
complexType.print();

complexType.usingDefaultParams();
complexType.print();

complexType.usingRest(10,2,3,4,5);
complexType.print();

complexType.usingTheAnyKeyword({ id : 12, name : "test"});
complexType.print();


complexType.usingTheOptionalParams();
complexType.print();

function callback1(id : number) : string {
    Utility.log("complexType.usingCallback " ,id.toString());
    return id.toString();
}

complexType.usingCallback(callback1);

var derived = new Derived(1,'mihir desai');
derived.print();

var derivedClass = new DerivedClass(15,'mihir desai');
derivedClass.print();

var personFactroy : PersonFactory = new PersonFactory();
var persons : Array<IPerson> = new Array<IPerson>();
var personDetails = new PersonDetails<IPerson>();
persons.push(personFactroy.getPerson(new Date(2015,0,1)));
persons.push(personFactroy.getPerson(new Date(2000,0,1)));
persons.push(personFactroy.getPerson(new Date(1995,0,1)));

for(var i = 0;i < persons.length; i++) {
    personDetails.print(persons[i]);
}

var classWithModifiers = new ClassWithModifiers(10,"mihir desai");
classWithModifiers.print();
classWithModifiers.id = 20;
classWithModifiers.print();

var stringArr : string[] = ["1" , "2" , "3"];
var numArr : number[] = [3,4,5];

var stringConcatenator = new Concatenator<string>();
var numConcatenator = new Concatenator<number>();

//stringConcatenator.concatenate(numArr); // incompatible type compile error

Utility.log("Generic Concatenator<string>() - " + stringConcatenator.concatenate(stringArr));
Utility.log("Generic Concatenator<number>() - " + numConcatenator.concatenate(numArr));
