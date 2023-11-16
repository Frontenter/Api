const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log("salom APi");
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
});

const btns = [1, 2, 3, 4, 5];
