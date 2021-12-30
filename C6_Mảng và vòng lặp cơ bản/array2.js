/*
slide: Tạo ra một mảng copy của mảng ban đầu
*/
console.log("-----array.slice-----");
const animals = ["tiger", "lion", "horse", "elephant"];
/* // .slice(): Tạo ra mảng mới y hệt mảng ban đầu */
const animals2 = animals.slice();
console.log(animals2);// ["tiger", "lion", "horse", "elephant"];
/* // slice(start)   (start: vị trí index ở trong mảng)  -->Slide tại vị trí mình muốn */
const animals3 = animals.slice(1);
console.log(animals3);
/* // slice(start, end). start là vị trí bắt đầu, end là vị trí kết thúc
   // nó sẽ sao chép từ vị trí start tới vị trí end - 1
*/
const animals4 = animals.slice(1, 99);    // ["lion", "horse", "elephant"]
console.log(animals4);
/* // slice(số âm)   (-1: lấy 1 cái cuối)  (-2: lấy 2 cái cuối) */
const animals5 = animals.slice(-2);
console.log(animals5);

/*
splice: Nó sẽ xoá phần tử trong mảng hoặc thay thế phần tử trong mảng
*/
console.log("-----array.splice-----");
const pets = ["dog", "cat", "bird", "dragon"];
/* // splice(start) */
// const pets2 = pets.splice(2);
// console.log(pets2); // ["bird", "dragon"];
/* // splice(start, deleteCount): deleteCount là số lượng phần tử muốn xoá hoặc thay thế */
// const pets3 = pets.splice(0, 4);
// [] empty array: mảng rỗng
/* // splice(start, deleteCount, item1, item2, itemN)
   //deleteCount là số lượng phần tử muốn xoá hoặc thay thế,
   //item... là các phần tử được thay thế vào vị trí bị xóa và tiếp tục sau vị trí đó
*/
const pets3 = pets.splice(0, 2, "dinasour", "pig", false, 100);
console.log(pets); // ["dinasour", "pig", false, 100, "bird", "dragon"];
/* sort(): Sắp xếp các phần tử trong mảng theo chuẩn unicode-16 */
console.log("-----array.sort-----");
const random = [1, 9999, 10000000, 5, 09];
console.log(random.sort());   // [1, 10000000, 5, 9, 9999]
// sort(function(a, b))    // --> function(callback)
const random2 = random.sort(function (a, b) {
  if (a > b) return 1; // Sắp xếp theo tăng dần
  if (a < b) return -1; // Sắp xếp theo giảm dần
});
//ternary operator:condition ?something : something else
const random3 = random.sort((a, b) => (a > b ? 1 : -1)); //sort tăng dần thì a > b return 1
console.log(random3);
const random4 = random.sort((a, b) => (a > b ? -1 : 1)); //sort giảm dần thì a > b return -1
console.log(random4);

/* find(fn): nó sẽ trả về phần tử tìm thấy đầu tiên trong mảng thoả điều kiện nào đó */
console.log("-----array.find-----");
const numbers = [1, 9999, 10000000, 5, 09];
// Tìm phần tử đầu tiên trong mảng lớn hơn 10
const findYourNumber = numbers.find((element) => element > 10);
const findYourNumber = numbers.find((element) => element > 10000000000);// Nếu ko tìm thấy --> undefined
console.log(findYourNumber); // 9999
/* findIndex(fn): nó sẽ trả về vị trí index tìm thấy đầu tiên trong mảng thoả điều kiện nào đó */
console.log("-----array.findIndex-----");
const findYourIndex = numbers.findIndex((element) => element < 0); // Nếu ko tìm thấy --> trả ra kết quả là -1
console.log(findYourIndex);

/* map(): duyệt qua từng phần tử trong mảng và trả ra một mảng mới mà không thay đổi mảng ban đầu */
console.log("-----array.map-----");
const listNumber = [1, 2, 3, 4, 5];
// trả ra một mảng mới mà các (giá trị) trong mảng cũ nhân 2
// .map(callback(value, index, array))
const listNumberDouble = listNumber.map(function (value, index, array) {
  return value * 2;
});
console.log(listNumberDouble); // [2, 4, 6, 8, 10]

/* forEach(callback(value, index, array)):duyệt qua mỗi ptu của mảng vs thực hiện 1 action nào đó */
console.log("-----array.forEach-----");
const listNumberTripple = listNumber.forEach((value, index, array) => {
  return value * 3;
});
console.log(listNumberTripple);

/*  Hãy cho biết sự khác nhau giữa forEach và map ? (CÂU HỎI HAY PHỎNG VẤN JS)
  - map thì có return còn forEach thì ko có
  - map trả ra 1 mảng mới dựa vào mảng ban đầu còn forEach thì ko
  - forEach ko có return -> chạy mãi -> thường dùng ở trong DOM
 */

/*  filter():Dùng để filter(sàng lọc) các phần tử trong mảng thoả điều kiện nào đó */
console.log("-----array.filter-----");
// .filter(callback(value, index, array))
// const listNumber = [1, 2, 3, 4, 5];
const greaterThanThree = listNumber.filter((item) => item > 30);
console.log(greaterThanThree);

/* some():Trả về true khi thoả 1 điều kiện và ngược lại trả vê false khi không thoả điều kiện nào cả */
console.log("-----array.some-----");
const someNumber = listNumber.some((value) => value > 3);
console.log(someNumber);

 /* every():Chỉ trả về true khi tất cả điều kiện đều đúng, ngược lại chỉ cần 1 cái sai là nó sẽ return false */
console.log("-----array.every-----");
const everyNumber = listNumber.every((value) => value > 3);
console.log(everyNumber);

/* reduce(): gom các phần tử trong mảng lại thành 1*/
console.log("-----array.reduce-----");
// .reduce((a, b) => {}, initialize value);
const totalNumber = listNumber.reduce(function (previousValue, currentValue) {
  console.log(previousValue, currentValue);
  return previousValue + currentValue;
}, 0);
console.log(totalNumber);
