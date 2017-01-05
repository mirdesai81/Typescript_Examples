import {IPerson} from "./Person";
import {Utility} from "../Utility";
/**
 * Created by Mihir.Desai on 6/22/2016.
 */

interface IPersonDetails<T extends IPerson> {
    print(person : T) : void;
}

export class PersonDetails<T extends IPerson> {
    print(person : T) {
        Utility.log(" A person with date of birth:" + person.getDateOfBirth() + " is categorized as: " + person.getCategory() + " and can sign contract:" + this.canSignContract(person));
    }

    private canSignContract(person : T) : string {

        if(person.isLegalToSignContract()) {
            return "YES";
        }

        return "NO";
    }
}
