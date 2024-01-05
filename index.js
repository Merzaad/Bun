const root = document.getElementById("root");

let loadingUI = "loading";

const interval = setInterval(() => {
  root.innerHTML = loadingUI += ".";
}, 1000);

setTimeout(() => {
  clearInterval(interval);
  root.innerHTML = "Hello World!";
}, 3500);
