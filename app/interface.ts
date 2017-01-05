/**
 * Created by Mihir.Desai on 6/20/2016.
 */
interface IComplexType {
    id : number
    name : string
}

var complexType : IComplexType = {
    id : 1, name : "interface"
};

/*
var complexType_2 : IComplexType = {
    id : 2, description : "interface_2"
};
*/  // Will genrate compile error since description is not part of IComplexType

/*var complexType_2: IComplexType = {
    id : 2,
    name : "interface_2",
    description : "interface_2"
};*/



