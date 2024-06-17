/*
    DataTypes are 2 Types
    1. Primitive DataType
        String,Number,Boolean,Null,Undefined,Symbol
    2. Non-Primitive Data Type (Reference Type)
        Array, Objects, Functions

    Note : JavaScript is a Dynamically Typed Language. i.e. The Data Type of the
           veriables are determined by the value they hold during run time. And can 
           Change through out the programm as we assign different values to them.    
*/

//Array
let Heroes = ['Shaktiman','Aryaman','Krrish','Junior-G']
// console.log(Heroes[0]+' '+ Heroes[3]);

Object
let MyObject = {
    Name : 'Jugun Behera',
    Mobile : '9036507261',
}
// console.log(MyObject.Name+' '+MyObject.Mobile);

Function
const MyFunction = Function(
    2+2
)

//console.log(typeof Heroes);

//typeof is a function used to find the data type.

let Number=23;
let Word = "23";
let IsActive = true;
let Money = null;
let DreamCompany;
let LoginId = Symbol('1234');
console.log(typeof MyFunction)
/*
Interview Question : (TypeOf Function Return)
Number = Number
String = String
Boolean = Boolean
Undefined = Undefined
Symbol = Symbol
Object = Object
Function = Function
Null = object
Array = Object
*/