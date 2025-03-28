// 1-masala
// function main(num) {
//     if (num > 0) {
//         num += 1;
//     }
//     console.log(num);
// }
// main(5)
// main(-5)

// 2-masala
// function main(a) {
//     if (a > 0) {
//         a += 1;
//     } else {
//         a -= 2;
//     }
//     console.log(a);
// }
// main(5)
// main(-5)

// 3-masala
// function main(b) {
//     if (b > 0) {
//         b += 1;
//     } else if (b < 0) {
//         b -= 2;
//     } else {
//         b = 10;
//     }
//     console.log(b);
// }
// main(4);
// main(-2);
// main(0);

// 4-masala
// function main(a, b, c) {
//     let d = 0;
//     if (a > 0) d++;
//     if (b > 0) d++;
//     if (c > 0) d++;
//
//     console.log(d);
// }
// main(3, -1, 7);
// main(-5, -2, -8);
// main(1, 2, 3);

// 5-masala
// function main(a, b, c) {
//     let d = 0;
//     let e = 0;
//     if (a < 0) e++;
//     if (b < 0) e++;
//     if (c < 0) e++;
//     if (a > 0) d++;
//     if (b > 0) d++;
//     if (c > 0) d++;
//
//     console.log(`${d} musbat ${e} manfiy`);
// }
// main(3, -1, 7);
// main(-5, -2, -8);
// main(1, 2, 3);

// 6-masala
// function main(a, b) {
//     if (a > b) {
//         return '${a} kattaroq';
//     } else if (b > a) {
//         return '${b} kattaroq';
//     } else {
//         return "Ikkalasi teng";
//     }
// }
//
// let son1 = parseInt(prompt("Birinchi sonni kiriting:"));
// let son2 = parseInt(prompt("Ikkinchi sonni kiriting:"));
//
// alert(main(son1, son2));

// 7-masala
// function main(a, b) {
//     if (a < b) {
//         return "1-son kichik ";
//     } else if (b < a) {
//         return "2-son kichik";
//     } else {
//         return "Ikkalasi teng, tartib raqami yo'q";
//     }
//
// }
// let son1 = parseInt(prompt("Birinchi sonni kiriting:"));
// let son2 = parseInt(prompt("Ikkinchi sonni kiriting:"));
//
// alert(main(son1, son2));

// 8-masala

// function main(a, b) {
//     if (a > b) {
//         console.log(a, b);
//     } else {
//         console.log(b, a);
//     }
// }
// let son1 = parseInt(prompt("Birinchi sonni kiriting:"));
// let son2 = parseInt(prompt("Ikkinchi sonni kiriting:"));
// main(son1, son2);

// 9-masala
// function main(a, b) {
//     if (a > b) {
//         let d = a;
//         a = b;
//         b = d;
//     }
//     console.log("a =", a, "b =", b);
// }
// let a = parseFloat(prompt("a ni kiriting:"));
// let b = parseFloat(prompt("b ni kiriting:"));
// main(a, b);

// 10-masla
// function main(a, b) {
//     if (a !== b) {
//         a=a+b;
//         b = a;
//     } else {
//         a = 0;
//         b = 0;
//     }
//     console.log("a =", a, "b =", b);
// }
// let a = parseFloat(prompt("A ni kiriting:"));
// let b = parseFloat(prompt("B ni kiriting:"));
// main(a, b);

