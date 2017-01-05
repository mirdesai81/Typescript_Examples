/**
 * Created by Mihir.Desai on 6/21/2016.
 */
export interface IPerson {
    getDateOfBirth() : string;
    getCategory() : string;
    isLegalToSignContract() : boolean;
}

export class Person  {
    dateOfBirth : Date;
    constructor(date : Date) {
        this.dateOfBirth = date;
    }
    getDateOfBirth() : string {
        return this.dateOfBirth.toDateString();
    }
}

export class Infant extends Person implements IPerson {
    getCategory() : string {
        return "Infant";
    }

    isLegalToSignContract() : boolean {
        return false;
    }
}

export class Young extends Person implements IPerson {
    getCategory() : string {
        return "Young";
    }

    isLegalToSignContract() : boolean {
        return false;
    }
}

export class Adult extends Person implements IPerson {
    getCategory() : string {
        return "Adult";
    }

    isLegalToSignContract() : boolean {
        return true;
    }
}
