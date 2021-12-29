// function (hàm)
// Khai báo function
// Cú pháp(Syntax): function functionName(parameters, parameters){
// Your code here
// }
// parameters:  tham số
// Đề bài là viết hàm tính tổng 2 số a và b
console.log(sum(500, 1000));
function sum(a = 0, b = 0) {
  // console.log("is it working?");
  const total = a + b;
  return total;
  // return
  // return value
  // Không có return thì kết quả của hàm trả về là undefined
}
// function sum(parameter = defaultValue){}
// sum() : invoke function
// invoke function sum(arguments)   arguments: Đối số

// Lưu function vào 1 biến rồi gọi sau này
function add(a = 0, b = 0) {
  console.log(a + b);
  return a + b;
}
// add(500, 1000);
const sum2 = add; // gán function add cho biến sum2 nhưng chưa được gọi
// sum2(300, 400);
// Tham số là function
// Tính trung bình của a và b -> (a + b) / 2
// fn: function
function average(a, b, fn) {
  const total = fn(a, b);
  return total / 2;
}
let result = average(200, 300, add);
console.log(`result ${result}`);
