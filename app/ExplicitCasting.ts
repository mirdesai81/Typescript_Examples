/**
 * Created by Mihir.Desai on 6/20/2016.
 */
//var item = { id : 1, item : "item"};
//item = { id : 2};  // will genrate compile error

//var item : any = { id : 1, item : "item"};
    //item = { id : 2};  //here is of type any so we can just id also to item. Relax's compiler type checking with any

var item = <any> {id : 1, item  : "item"};
item = { id : 1}; // explicit type using <> allows one object to be type of another




