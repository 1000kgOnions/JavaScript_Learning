// String(Chuỗi)
"Hello world";
"My name is Evondev";
`I am frontend developer`;
// double quotes, single quote, backticks (template literal)
const name = "Anh Tuan";
const job = "Designer";
// console.log(name);
// console.log(typeof name);
const newStr = "My name is Evondev and I am Frontend Developer";
const newStr2 = "My name is " + name + " and I am " + job;
// console.log(newStr2);
// ${variable}
const newStr3 = `My name is ${name} and I am ${job}`;
console.log("🚀 ~ file: string.js ~ line 15 ~ newStr3", newStr3)
// console.log(newStr3);
// .length
// console.log(newStr3.length);
// My name is Anh Tuan and I am Designer -> 0-36 -> length: 37
// index là vị trí của từng kí tự trong chuỗi,(bao gồm cả khoảng trắng)
const myStr = "    Frontend Developer D     ";
console.log(myStr.split(" ")); // ["Frontend", "Developer"]
console.log(myStr.split("")); // ["F","r","o","t","e"]
console.log(myStr.split("/")); // ["Frontend Developer"]
console.log(myStr.toLowerCase()); // frontend developer
console.log(myStr.toUpperCase()); // FRONTEND DEVELOPER
// true
console.log(myStr.startsWith("frontend"));
// true
console.log(myStr.endsWith("Developer"));
// true
console.log(myStr.includes("end"));
// false
console.log(myStr.includes("abc"));
console.log(myStr.indexOf("D")); // 9
console.log(myStr.lastIndexOf("D")); // 19
console.log(myStr.replace("Developer", "Designer"));
console.log(myStr.repeat(5));
// "Frontend Developer D"
// slice(start, end);
console.log(myStr.slice(0, 8)); // Frontend
console.log(myStr.slice(0)); // Frontend Developer D
console.log(myStr.slice(-5)); // per D
console.log(myStr.slice(9999)); //
console.log(myStr.trim()); // remove space left and right
console.log(myStr.trimStart()); // remove space left
console.log(myStr.trimEnd()); // remove space right
const myStr2 = "Frontend";
console.log(myStr2.charAt(1));
// substr -> Lấy ra 1 phần của chuỗi(string)
// substr(index, length) -> index: vị trí, length: số lượng kí tự bạn muốn lấy
console.log(myStr2.substr(1, 5)); // ronte
// substring -> Lấy ra các kí tự của chuỗi(string)
// substring(start index, end index);
console.log(myStr2.substring(1, 5)); // ront
const myStr3 = "    Frontend Developer D     ";
// Loại bỏ khoảng trống 2 bên, đưa tất cả về IN HOA, thay chữ `Developer D` thành chữ `Developer and Designer`, sau đó repeat 2 lần;
console.log(
  `Result of myStr3: ${myStr3
    .trim()
    .replace("Developer D", "Developer and Designer")
    .toUpperCase()
    .repeat(2)}`
);
