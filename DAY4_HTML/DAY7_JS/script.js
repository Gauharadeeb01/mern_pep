// function xyz(){
//     console.log("inside xyz");
//     function temp(x){
//         console.log(x*x);
//     }
//     console.log('end');
//     temp(12);
// }
// console.log('start');
// xyz()


// const button=document.getElementsByTagName('button')[0];
// button,addEventListner('click',cb);

// function cb(){
//     console.log('Button clicked');
// }



// console.log('start');
// const delay=1000;
// const cb=()=>{
//     console.log("CB called");
// }
// setTimeout(cb,delay);
// console.log('end');


// console.log('start');
// setTimeout(()=>{
//     console.log("A");
// },0);

// console.log('MId');
// function abc(){
//     console.log("B");
// }

// function efg(){
//     console.log("C");
//     setTimeout(()=>{
//         console.log('D');
//     },0);
// }

// setTimeout(abc,0);
// efg();

// console.log("end");


/*------------------------PROMISES----------------*/


const request=fetch('https://dummyjson.com/products');

request.then((result)=>{
const convertData=result.json();
convertData.then(renderUI);


}).catch((error)=>{
    alert(error);
});

const renderUI=(data)=>{
    console.log('**')
}
