// API là gì ?
// Application Programming Interface: phương thức trung gian kết nối các ứng dụng và thư viện khác nhau
// Cung cấp khả năng truy xuất đến 1 tập các hàm hay dùng, từ đó có thể trao đổi dữ liệu giữa các ứng dụng
// https://api.github.com/users/evondev
// JSON.parse(data)
const endpoint = "https://api.github.com/users";
const userEl = document.querySelector(".username");
// fetch

async function displayUser(username) {
  userEl.textContent = "Loading...";
  const promise = await fetch(`${endpoint}/${username}`);
  const data = await promise.json();
  userEl.textContent = `${data.login}`;
}
function handleError() {
  console.log("Something wrong with your api");
  userEl.textContent = "No data found";
}
// console.log(displayUser("evondev"));
displayUser("asbc").catch(handleError);
// cors
