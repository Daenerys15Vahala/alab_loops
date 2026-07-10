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
let n = 4;

while (true) {
    n++;

    let isPrime = true;

    for (let i = 2; i < n; i++) {
        if (n % 4 === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(n);
        break;
    }
}



//  part 3 : feeling loopyyyyyyy

// const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

// let space1 = "";
// let space2 = "";
// let space3 = "";
// let space4 = "";

// let currentSpace = 1;

// for (let i = 0; i < csv.lenght; i++) {
//     let char = csv [i];

//     if (char === ",") {
//         cuurentSpace++;
//     }

//     else if (char === "\n") {
//         console.log(space1, space2, space3, space4);

//         space1 = "";
//         space2 = "";
//         space3 = "";
//         space4 = "";

//         currentSpace = 1;
//     }

//     else {
//         if(currentSpace === 1){
//             space1 += char;
//         }
//         else if(currentSpace === 2){
//             space2 += char;
//         }
//         else if(currentSpace === 3){
//             space3 += char;
//         }
//         else if(currentSpace === 4){
//             space4 += char;
//         }
//     }
// }
// console.log(space1, space2, space3, space4);