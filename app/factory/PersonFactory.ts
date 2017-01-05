/**
 * Created by Mihir.Desai on 6/21/2016.
 */
import {IPerson} from "./Person";
import {Infant} from "./Person";
import {Young} from "./Person";
import {Adult} from "./Person";

export class PersonFactory {
    getPerson(dateOfBirth : Date) : IPerson {

        var date2yrsAgo = new Date(dateOfBirth.getFullYear() - 2,dateOfBirth.getMonth(),dateOfBirth.getDay());

        var date18yrsAgo = new Date(dateOfBirth.getFullYear() - 18,dateOfBirth.getMonth(),dateOfBirth.getDay());
        if(dateOfBirth >= date2yrsAgo) {
            return new Infant(dateOfBirth);
        }

        if(dateOfBirth >= date18yrsAgo) {
            return new Young(dateOfBirth);
        }

        return new Adult(dateOfBirth);
    }

}




