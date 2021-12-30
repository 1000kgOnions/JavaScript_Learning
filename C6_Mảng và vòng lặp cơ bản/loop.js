// Vòng lặp
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*
for (let i = 0; i < numbers.length; i++) {
  body code
}
*/
// for (let i = 0; i < numbers.length; i++) {
//   console.log(`The index is ${i}`);
// }

/*
giải thuật:
length: 5
i = 0;
i < 5 -> true
i++ -> 1
result: 0
-----
i = 1;
1 < 5 -> true
i++ -> 2
result: 1
-----
i = 2;
2 < 5 -> true
i++ -> 3
result: 2
-----
i = 3;
3 < 5 -> true
i++ -> 4
result: 3
-----
i = 4;
4 < 5 -> true
i++ -> 5
result: 4
-----
i = 5;
5 < 5 -> false
loop end
*/
// for (let i = 0; i < numbers.length; i = i + 2) {
//   console.log(`The index is ${i}`);
// }
// numbers[0]
// numbers[numbers.length - 1]
for (let i = 0; i < numbers.length; i++) {
  // console.log(`The index is ${i}`);
  // console.log(`The value ${numbers[i]}`);
  // Nếu giá trị là 8 thì dừng vòng lặp
  // if (numbers[i] === 8) {
  //   break;
  // }
  // Nếu giá trị là 8 thì bỏ qua giá trị đó
  if (numbers[i] === 8) {
    continue;
  }
  // console.log(`The value ${numbers[i]}`);
}
/* // [[1,2,3,4,5], [1,2,3,4,5]] :mảng lồng nhau */

/* // nested loop :vòng lặp lồng nhau */
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(`The value ${numbers[i]}`);
  for (let j = numbers.length - 1; j >= 0; j--) {
    console.log(j);
  }
}
// let i = numbers.length - 1 -> lấy vị trí cuối cùng của mảng
// i >= 0 -> điều kiện index lớn hơn hoặc bằng 0
// i-- -> i = i - 1
/*
// infinite loop :lặp vô hạn
for (let i = 0; 2 > i; i--) { }
*/

/*
Exercises
*/
/* // 1. sao chép mảng dùng vòng lặp for :  push(value) */
let copyArr = [];
for (let i = 0; i < numbers.length; i++) {
  copyArr.push(numbers[i]);
}
console.log(copyArr);
/* // 2. Đảo ngược từ "i love" -> "evol i" */
let str = "i love";
let result = "";
for (let i = str.length - 1; i >= 0; i--) {
  console.log(str[i]);
  result = result + str[i];
}
console.log(result);

/*
//  WHILE: (check đk -> xử lý)
    DO WHILE: ( xử lý -> check đk)
// while(condition: điều kiện) {
// body code
// }
*/
let number = 1;
while (number < 10) {
  // console.log("number is " + number);
  // điều kiện để dừng
  number = number + 1;
  // number+=1;
  // number++;
}
/*
do {
} while(condition: điều kiện)
*/
// let number2 = 1;
// do {
//   number2++;
//   console.log("number is " + number2);
// } while (number2 < 10);

/*
// for of
// for (value of array){}
*/
let a = [];
for (let value of numbers) {
  value += 10;
  a.push(value);
}
// console.log(a);
for (let c of "evondev") {
  console.log(c);
}

