//Task 1

function extractNumbers(str) {
  return str
    .split("")
    .filter((char) => /\d/.test(char))
    .map(Number);
}

const result = extractNumbers("a1fg5hj6");
console.log(result);

//2
function printFibonacciDelayed(a = 0, b = 1) {
  if (a > 144) return;

  console.log(a);

  setTimeout(() => {
    printFibonacciDelayed(b, a + b);
  }, 1000);
}

printFibonacciDelayed();

//3
async function fetchProductTitles() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    data.forEach((product) => {
      console.log(product.title);
    });
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
  }
}

fetchProductTitles();

//4
document
  .getElementById("color-buttons")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      const color = event.target.textContent;
      document.body.style.backgroundColor = color;
    }
  });

//5
const square = document.getElementById("square");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  if (square.style.display === "none") {
    square.style.display = "block";
    toggleBtn.textContent = "Скрыть";
  } else {
    square.style.display = "none";
    toggleBtn.textContent = "Показать";
  }
});

//6
const counter = document.getElementById("counter");
let count = 0;

const intervalId = setInterval(() => {
  count++;
  counter.textContent = count;

  if (count >= 100) {
    clearInterval(intervalId);
  }
}, 1);

//7
const fetchBtn = document.getElementById("fetchBtn");

fetchBtn.addEventListener("click", async () => {
  try {
    const response = await fetch("test.json"); // Здесь указано test.json
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();
    console.log("Полученные данные:", data);
  } catch (error) {
    console.error("Ошибка при загрузке JSON:", error);
  }
});
