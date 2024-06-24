//javascript is loosly coupled and dynamically typed .


console.log("working...");

// var age;//declaration
// age=18;   // assignment / initialization
// console.log(age);

// age=19; //re-ssignment

// var age=20;  //re-declaration
// console.log(age);

// function abc(){
  
// console.log(age);   //var is a  functional scope
// }

// abc();


// let username='gauhar';
// console.log(username)

// username='adeeb';
// console.log(username)  

// let username="hhdhdd"  //let can not be re-declared, this line gives error
// console.log(username) ;   //and it is block level scope.
 
/*******************DAY5_JS***********************/

// let age=18;
// console.log(typeof(age));

// let username1="gauhar";
// let username2='adeeb';

// let n=username1+ ' '+username2;
// console.log(n);

// let a= username1+10;
// let b=10+username2;

// let c=username1-10;

// console.log(a);
// console.log(b);
// console.log(c);




// let v1='gauhar';
// let v2='gauhar';

// if(v1==v2){
//     console.log("yes");
// }else{
//     console.log("no");
// }

// if(v1===v2){
//     console.log("yes");
// }else{
//     console.log("no");
// }





// let u1='gauhar';
// let u2='adeeb';

// let ans1= u1 + ' '+ u2;
// let ans2= `u1 u2`;  
// let ans3 = `${u1} ${u2}`;   //template litrals

// console.log(ans1);
// console.log(ans2);

// console.log(ans3);  


// //function defination with function keyword
// function printHello(x){
//     console.log('Hello',x)
// }

// // function invocation
// printHello('gauhar');




// //function assignment
// const pH=function printHi(x){
//     console.log('hi',x);
// }
// pH("gauhar");




// //anonymous function assignment
// const pHi=function(x){
//     console.log('hii',x);
// }
// pHi("adeeb");





// //arrow function assignment
// const pHii=(x) =>{
//     console.log('hiii',x);
// }
// pHii("aly");




// function Sum(a,b){
//     const ans=a+b;
//     console.log(ans);
// }

// const mul=(a,b) =>{
//     const ans=a*b;
//     console.log(ans);
// }
// Sum(10,20) //isko likh skte hai before initialization bhi
// mul(10,20)   //isko uper nhi likh skte bcz cant access mul before initialization





// const calculateSum = (a, b) => {
//     if (a == undefined && b == undefined) {
//         console.log('0');
//     } else if (b == undefined) {
//         console.log(a);
//     } else {
//         const ans = a + b;
//         console.log(ans);
//     }
// };

// calculateSum(); 
// calculateSum(10); 
// calculateSum(10, 20); 



// //without if else calculateSum  by givinf default value

// function sumNum(a=0,b=0){
//     console.log(a+b);
// }

// sumNum();
// sumNum(10);
// sumNum(10,20);



// /*------------------object-----------*/


// const obj1=new Object();  /*object key value is string number anything */
// const obj2={};
// obj1.name="gauhar";
// obj2.name="adeeb";

// console.log(obj1);
// console.log(obj2);




// const obj = {
//     name: "ajay",
//     age: 30,
//     "10": "ten",
//     city: "jaipur",
    
// }
// console.log(obj);
// console.log(obj.name);
// console.log(obj[10]);




// // const input=prompt();
// // {
// //     console.log(obj[input]);
// // }


// /*----------------Array----------- */

// const arr=["one","two",100];   /*array key value is only number 0,1,2 */
// console.log(arr);


/*--------------DOM MANIPULATION-------------*/


// console.log(window);
// console.dir(document);
// const body=document.getElementsByTagName('body');
// console.log(body);

// const div=document.getElementsByTagName('div');
// console.dir(div[0]);
// div[0].innerText="DOM"

const d1=document.getElementsByClassName('container');
console.dir(d1);
d1[0].style.color='Blue';
d1[0].style.backgroundColor='red';
