/**
 * Created by Mihir.Desai on 6/20/2016.
 */
export var concat = function(a : string, b? : string, c? : string) {
    return a + b + c;
};

export var concatWithDefaultParam = function(a : string, b : string = 'b', c : string = 'c') {
    return a + b + c;
};