/*
By value vs By referrences
 */
/* // By value -> giá trị thực sự được lưu trong vùng bộ nhớ */
const num1 = 1;
const num2 = 1;
console.log(num1 === num2); // true
/* // By referrences -> nói (ám chỉ) tới vùng bộ nhớ */
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 === arr2); // false
/*
// JSON: Javascript Object Notation
{
  "key": value,
  "key": value,
  "key": value,
}
*/
/*
// so sánh 2 mảng
// JSON.stringify(value) -> convert giá trị sang dưới dạng JSON string
// toString()   --> [1,2,3].toString() -> "1,2,3"
// JSON.stringify([1,2,3]) -> "[1,2,3]"
// JSON.parse("[1,2,3]") -> [1,2,3]
*/
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.parse("[1,2,3]"));
const arr1Str = JSON.stringify(arr1);
const arr2Str = JSON.stringify(arr2);
console.log(arr1Str === arr2Str); // true

/* // clone (sao chép mảng) */
const students = ["a", "b", "c", "d", "e"];
// 1. sử dụng phương thức slice()
const sliceStudents = students.slice();
sliceStudents.pop();
console.log(sliceStudents); // ["a", "b", "c", "d"]
// 2. spread operator [...array]
const spreadStudents = [...students];
console.log(spreadStudents); //["a", "b", "c", "d", "e"]
/*
// concat (gộp mảng)
// [1,2] [3,4] [5,6] -> [1,2,3,4,5,6]
*/
// 1. array1.concat(array2, array3, arrayN);
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];
const mergeArray = array1.concat(array2, array3);
console.log(mergeArray);
// 2. spread operator
// [...array]
const mergeArray2 = [...array1, ...array2, ...array3];
console.log(mergeArray2);

/* // destructuring array:lấy cái gtri của mảng mà code clean không dài dòng */
//Bình thường
const toys = ["ball", "sword", "arrow", "magic", "water", "fire"];
const a = toys[0]; // ball
const b = toys[1]; // sword
const c = toys[2]; // arrow
console.log(a, b, c);
//destructuring   --> const [indexName, indexName, indexName] = toys;
const [ball, sword, arrrow] = toys;
// console.log(ball, sword, arrrow); //["ball", "sword", "arrow"]
/* // rest parameter ... (xử lý ở vế bên trái):lấy ra phần còn lại của mảng*/
const [ball, ...rest] = toys;
console.log(rest); //["sword", "arrow", "magic", "water", "fire"]
function demo(a, ...rest) {
  console.log(a, rest); //a = 1 ; ...rest:2,3,4,5
}
demo(1, 2, 3, 4, 5); //[2, 3, 4, 5]
