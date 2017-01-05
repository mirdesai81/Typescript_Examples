/**
 * Created by Mihir.Desai on 6/16/2016.
 */
export class Utility {
    static log(...msg) : void {
        var div = document.createElement("div");
        div.innerHTML = msg.join("");
        document.getElementById("container").appendChild(div);
        /*console.log(msg.join(""));*/
    }
}
