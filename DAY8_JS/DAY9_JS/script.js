// const student={
//     username:'gauhar',
//     rollNo:'23',
//     city:'delhi'
// }

// console.log(student.username);

// const{username}=student;
// console.log(username)

// const fruit=['banana','apple','orange'];
// console.log(fruit[0]);  

//  const [i1,i2]=fruit;  
// console.log(i1,i2);


// function sum(...arr){
//     arr.forEach((a,b,c)=>{
//         console.log(a,b,c);
//     })
// }


function sum(...arr) {
    const res = arr.reduce((acc, elem, idx) => {
      console.log(acc, elem, idx); 
      return acc + elem;
    }, -1);
  
    console.log('--->res', res); 
  }
  
  sum(10, 20, 11); // calling the function
  
// sum(10,20,11,2)
// sum(2,4,5,10,2)