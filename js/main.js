const boxContainer = document.getElementById("box_container");

for (let i = 1; i <= 100; i++) {
  const boxElement = document.createElement("div");
  boxElement.classList.add("boxElement");

  if (i % 15 == 0) {
    boxElement.innerText = "FizzBuzz";
    boxElement.classList.add("boxFizzBuzz");
  } else if (i % 5 == 0) {
    boxElement.innerText = "Buzz";
    boxElement.classList.add("boxBuzz");
  } else if (i % 3 == 0) {
    boxElement.innerText = "Fizz";
    boxElement.classList.add("boxFizz");
  } else {
    boxElement.innerText = i;
  }

  boxContainer.append(boxElement);
}
