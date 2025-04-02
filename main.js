// For1
// function main(k, n) {
//     for (let i = 0; i < n; i++) {
//         console.log(k);
//     }
// }
// main(2,4)

// For2
// function main(a, b) {
//     for (let i = a; i <= b; i++) {
//         console.log(i);
//     }
//     console.log(b - a + 1);
// }
// main(2,4)

// For3
// function main(a, b) {
//     for (let i = b; i >= a; i--) {
//         console.log(i);
//     }
//     console.log(b - a + 1);
// }
// main(2,4)

// For4
// function main(price) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${i} kg = ${i * price}`);
//     }
// }
// main(2,4)

// For7
// function main(a, b) {
//     let sum = 0;
//     for (let i = a; i <= b; i++) {
//         sum += i;
//     }
//     console.log(sum);
// }
// main(2,4)

// For8
// function main(a, b) {
//     let number = 1;
//     for (let i = a; i <= b; i++) {
//         number *= i;
//     }
//     console.log(number);
// }
// main(2,4)

// For9
// function main(a, b) {
//     let sum = 0;
//     for (let i = a; i <= b; i++) {
//         sum += i * i;
//     }
//     console.log(sum);
// }
// main(2,4)

// For10
function main(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1 / i;
    }
    console.log(sum);
}
main(2,4)
