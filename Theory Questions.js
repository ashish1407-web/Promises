//'use strict'
//closure
function  closure()
{
var a=10;
function sum()
{
console.log(a);
}
return sum()
}
closure();
//callback function
function sum(callback)
{
callback()    
}
function add()
{
var a=10;
console.log(a);
}
sum(add);

//higher order function

function x()
{
var z=20;
return z;
}
function y(x)
{
return x;   
}
var g=x();
const p=y(g);
console.log(p);
/********************this Keyword****************************************8 */
//this keyword
/*var obj={
name:"ashish",
surname:"vyas",
getName:function getAcess(){
console.log(this.name);
}
}
obj.getName();

/*function add()
{
console.log(this);
}
add();*/

/*const sum=()=>
{
console.log(this);    
}
sum();*/
//********************************function statement,Expression,anonymous function first class function************************************** */
//function statement
/*function get()
{

}
get();
//function expression
var sum=function add()
{

}
sum();
//firstClass function
var sum1=function group()
{


}
sum1();
//anonymous function
/*function(){

}*/
//************************call apply bind*****************************8
/*var obj={
name:"ashish",
surname:"vyas",
getName:function(){
console.log(this.name);
}
}
var obj1={
name:"suresh"    
}
obj.getName.call(obj1);*/

//apply
/*var obj2={
    name:"ashish",
    surname:"vyas",
    getName:function(a,b){
    console.log(this.name,a,b);
    }
}
var obj3={
    name:"lalipesh",
    surname:"vyas"
}
obj2.getName.apply(obj3,["ass","vyas"])*/
/*var obj2={
    name:"ashish",
    surname:"vyas",
    getNam
    e:function(a,b){
    console.log(this.name,a,b);
    }
}
var obj3={
    name:"lalipesh",
    surname:"vyas"
}
var g=obj2.getName.bind(obj3,"ass","vyas")
g();*/

//***************************************************************** */

//Deep copy
var a=10;
var b=20;
var c=a;
var d=b;
c=40;
d=50;
console.log(a,b);
console.log(c,d);

//slow Copy

var array=[1,2,3,4,5]
var arr1=array;
arr1[0]=9;
console.log(array);
console.log(arr1);

//******************************** */

//json.stringify
/*var obj={
name:"ashish"
}
var d=JSON.stringify(obj)
console.log(d);*/
//JSON Parse
/*var obj1={
"name":"vijay"}
JSON.parse(obj1);*/
/*************************************************** */
let origineValue={
name:'john'
}
let copiesValues=JSON.parse(JSON.stringify(origineValue));
console.log(copiesValues);


/***********spread Operator**************** */

var arr1=[1,2,3,4,5]
var arr2=[...arr1]
console.log(arr2);

//rest operator
function sum(a,b,...c)
{
console.log(c);
console.log(a);
console.log(b);
}
sum(1,2,3,4,5,6);
/***************************implicite tyrpe converator***************************** */
/*var a=2;
var b='3';
console.log(b-a);*/

/*************splice && slice*************************** */
/*var array=[1,3,4,5,6,7,8]
var d=array.splice(1,2);
console.log(d);
console.log(array);

var array1=[1,9,6,5,43]
var d=array1.slice(0,3)
console.log(d);
console.log(array1);*/

/**************Higher Order function******************* */
//map
/*var array=[1,2,34,5]
var d=array.map((currentValue,index)=>{
return currentValue*2;
})
console.log(d);
//reduce
var array1=[1,2,34,5]
var d=array.reduce((items,sum,index)=>{
return sum+=items;
})
console.log(d);
//forEach
var array2=[1,2,34,5]
var e=array2.forEach((x,index)=>{
var d=x*1;
console.log(d);
})
console.log(e);

var array3=[1,2,34,5]
var e=array3.filter((x,index)=>{
return x>2;
})
console.log(e);*/
/*************************************************************8 */
//classes

/*class Student
{
constructor(roll,name)
{
this.roll=roll;
this.name=name;
}
getName(){
return this.name;
}
get getRoll(){
return this.name;
}
}
var student=new Student(1,"ashish")
console.log(student.getName());
console.log(student.getRoll);*/

/*function AllStudents(name,roll,total)
{
constructor(name,roll,total)
{
this.name=name;
this.roll=roll;
this.total=total;
}
}
const allStudent=new AllStudents("ashish",12,"MSC");
console.log(allStudent);*/

//inheritance in js && methode
/*class Total{
constructor(name,roll){
this.name=name;
this.roll=roll;
}
getName(){
return this.name;
}
}
class Total1 extends Total{
constructor(name,roll,branch){
super(name,roll)
this.branch=branch;
}
getName(){
return this.roll;    
}
}
const st=new Total("ashish111",121)
const tt=new Total1("as",12,"ll");
console.log(tt.getName());
console.log(tt);
/**********methode overloading********* */
//js does not support the method method overloading 
// function foo(argu1)
// {
// console.log(argu1);
// }
// function foo(argu1,argu2)
// {
// console.log(argu1,argu2)
// }
// foo(1);
// //Abstrcution 
// class fool1
// {
// constructor()
// {
// if(this.constructor==fool1){
// console.log("we cannot create")    
// }
// }
// getInfo(){
// console.log("cannot implement")    
// }
// }
// class Teacher extends fool1 {
//     info() {
//         super.info();
//         console.log("I am a Teacher");
//     }
// }
// var teacher1 = new Teacher();
// teacher1.getInfo();
/************************************************* */
//currying
//currying is a way of evaluation a function with single argument into squence of function 
//with one argument

// function add(a)
// {
// return function subtract(b){
// return function a3(c){
// return a+b+c;
// }
// }
// }
// console.log(add(1)(2)(3));
/***************************************************************** */
//prototype in js
// function Student(name,surname,roll){
// this.name=name;
// this.surname=surname;
// this.roll=roll;
// }
// Student.prototype.calculate=function(){
// return this.name;
// }
// console.log(Student.prototype);
// var student1=new Student("ashish","vyas",1)
// var student2=new Student("vivk\e");
// console.log(student2.calculate());
/********************************** */

// var promise=new Promise((resolve,reject)=>{
// setTimeout(()=>{
// resolve("This promise is resolved")
// },1000)
// })
// var promise1=new Promise((resolve,reject)=>{
// setTimeout(()=>{
// resolve("This promise is resolved")
// },1000)
// })
// var promise2=new Promise((resolve,reject)=>{
// setTimeout(()=>{
// reject("This promise is resolved")
// },1000)
// })
// Promise.allSettled([promise,promise1,promise2]).then((data)=>{
// console.log(data);
// })

function sum()
{
var promise=new Promise((resolve,reject)=>{
setTimeout(()=>{
resolve("This promise is resolve");
},3000)
})
return promise;
}
sum().then((student)=>{
console.log(student);
}).catch((err)=>{
console.log(err.message)
})
/***********For Each******* */
var arr=[1,2,3,4,5]
arr.forEach((ele,index,arr)=>{
  arr[index]=ele*2;
})
console.log(arr)


























































