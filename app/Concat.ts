/**
 * Created by Mihir.Desai on 6/22/2016.
 */
export class Concatenator<T> {
    concatenate(inputArr : Array<T>) : string {
        var result = "";
        for(let i = 0 ; i < inputArr.length; i++) {
            if(i > 0) {
                result += ","
            }

            result += inputArr[i].toString();
        }
        return result;
    }
}
