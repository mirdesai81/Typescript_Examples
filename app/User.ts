/**
 * Created by Mihir.Desai on 6/16/2016.
 */
export class User {
    private fullname : string;
    constructor(firstname : string, lastname : string) {
        this.fullname = firstname + " " + lastname;
    }
    hello() : string {
        return "Hello my name is " + this.fullname;
    }
}


