// const s2=document.getElementsByTagName('section');
// const secondSection=s2[1];
// const title = secondSection.getElementsByTagName('h4');
// title[0].innerText="JS Callbacks 123"


// const title=document.querySelector("section>h4:first-child");
// title.style.color='brown';

// const title=document.querySelector("section:last-of-type>h4");
// title.style.color='red';



//title.className='cs1';  //give new class name
//title.setAttribute('class','cs22')  //set att as class name is cs22
//title.setAtrribute('name',"gauhar") //set the name attribute to gauhar




// const p=document.createElement("p");
// const sec=document.getElementsByTagName('section')[0];
// sec.appendChild(p);
// p.innerText= "Your text here";
// sec.appendChild(p);  //append last ,prepend first main
// sec.append("hello world");
// sec.appendChild("new world")

//HW==>node vs element
//html collection vs array
//remove ,remove child

// function printHello(){
//     console.log("hello......!");
// }

// function inputClicked(){
//     console.log("inputClicked");
// }

// function inputKeydown(e){
//     console.log("inputKeydow",e);
// }

// function inputKeydown(e){
//     console.log("inputKeydown");
//     console.log(e.target.value)
// }

// function inputChanged(e){
//     console.log("inputChanged",e);
// }


// function inputChanged(e){
//     console.log("inputChnage");
//     console.log(e.target.value);
// }


// function handleUserName(e){
//     console.log("Name:" ,e.target.value);
// }


// function handleUserAge(e){
//     console.log("Age:" ,e.target.value);
// }

// function handleSubmit(e){
//     e.preventDefault();
// // console.dir(e.taget);
    
//     const userName=e.target[0].value;
//     const userAge=e.target[1].value;
//     console.log(userName,userAge);

//     if(age<30){
//        document.body.append("validation successful")
//     }else{
//         document.body.append("please")
//     }
// }



// function handleSubmit(e) {
//     e.preventDefault();
//     const arr = e.target;
//     const name = arr[0].value;
//     const email = arr[1].value;
  
//     console.log(name, email);
  
//     const form = document.getElementsByTagName("form")[0];
//     form.style.display = "none";
  
//     renderCard(name, email);
//   }
  
//   const renderCard = (n, e) => {
//     const root = document.getElementById("root"); 
//     root.setAttribute("class", "card");
  
//     root.innerHTML = `
//       <h3 class="name">Name is: ${n}</h3>
//       <h4 class="email">Email is: ${e}</h4>
//     `;
//   };


// const arr=["fruits","apple","mango"];

// const printValue=(a,b,c)=>{
//     console.log('value is',a);
//     console.log('index is',b);
//     console.log('array is',c);
//     console.log('-------------------');
// }
  
// for(let i=0;i<arr.length;i++){
//     printValue(arr[i],i,arr);
// }

const arr=[21,212,32];
let sum=0;
arr.forEach((b)=>{
    sum+=b;
});
console.log(sum);



