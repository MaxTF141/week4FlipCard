
// let button = document.querySelector('#btn');
// button.addEventListener('click', ()=>{
//     document.write('Hello World');
// })

// var numb1 = 9;


// let numb1  = 12;   //variable not a instance
// let numb1 = new Number(12);
// let numb2 = 13;
// console.log(numb1); 
// console.log(numb2); 
// console.log(numb1 instanceof Number);

// a variable is a placeholder
// the the new NUmber will have its own method. its like and black. all the references that is defined in the constructor function.


// 2 ^ 0 = 1
// 2 ^ 1 = 2
// 2 ^ 2 = 4
// 2 ^ 3 = 8
// 2 ^ 4 = 16
// 2 ^ 5 = 32
// 2 ^ 6 = 64
// 2 ^ 7 = 128
// 2 ^ 8 = 256
// 2 ^ 9 = 512

let numbers = ['4','6','8','9','11','14']
console.log(numbers.length);
console.log(numbers[0]);

function evenNumber(numbs){
    for(let n = 0; n<=numbers.length; n+=2){
        console.log(numbs[n]);
    };
}
evenNumber(numbs);



