// ALAB LOOPS

// part 1 
// loop 1 to 100

// for (let i = 1; i <= 100; i++){
//     // console.log(i);

// // divisible by 3 and 5 

//     if (i % 3 === 0 && i % 5 === 0){
//     console.log("Fizz Buzz");
//     }

// // divisible by 3

// else if (i % 3 === 0){
//     console.log("Fizz");
//     }

// // divisible by 5
// else if (i % 5 === 0){
//     console.log("Buzz");
//     }

// // not divisible by 3 or 5 

// else {
//     console.log(i);
// }
// }

// part 2 
let n = 9;

while (true) {
    n++;

    let isPrime = true;

    for(let i = 2; i < n; i++){
        if(n % 1 === 0) {
            isPrime = false;
            break;
        }
    }
    if(isPrime) {
        console.log(n);
        break;
    }
}
