let clickCount = 0; // initialize global click count

const resultCalculationDiv = document.getElementById("result");
// for clicked triangle eventlistener
document.getElementById("triangle-btn").addEventListener("click", function () {
  const base = getInputField1ValueByID("base-input");
  const height = getInputField2ValueByID("height-input");
  const area = calculateArea(base, height, "triangle");
  if (area) {
    clickCount++;
    resultCalculationDiv.innerHTML += `<p class="ml-4 mb-4">${clickCount}. Triangle ${(area).toFixed(2)} cm² <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-normal py-1 px-2 rounded ">
                Convert to m²</button></p>`;
  }
});
// for clicked rectangle eventlistener
document.getElementById("rectangle-btn").addEventListener("click", function () {
  const width = getInputField1ValueByID("w-input-rectangle");
  const length = getInputField2ValueByID("l-input-rectangle");
  const area = calculateArea(width, length, "rectangle");
  if (area) {
    clickCount++;
    resultCalculationDiv.innerHTML += `<p class="ml-4 mb-4">${clickCount}. Rectangle ${area.toFixed(2)} cm² <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-normal py-1 px-2 rounded ">
                Convert to m²</button></p>`;
  }
});
// for clicked parallelogram eventlistener
document
  .getElementById("parallelogram-btn").addEventListener("click", function () {
    const baseParallelogram = getInputField1ValueByID("b-input-parallelogram");
    const heightParallelogram = getInputField2ValueByID("h-input-parallelogram");
    const area = calculateArea(baseParallelogram,heightParallelogram,"parallelogram");
    if (area) {
      clickCount++;
      resultCalculationDiv.innerHTML += `<p class="ml-4 mb-4">${clickCount}.Parallelogram ${area.toFixed(2)} cm² <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-normal py-1 px-2 rounded ">
                Convert to m²</button></p>`;
    }
});
// for clicked rhombus eventlistener
document.getElementById("rhombus-btn").addEventListener("click", function () {
  const d1 = getInputField1ValueByID("d1-input-rhombus");
  const d2 = getInputField2ValueByID("d2-input-rhombus");
  const area = calculateArea(d1, d2, "rhombus");
  if (area) {
    clickCount++;
    resultCalculationDiv.innerHTML += `<p class="ml-4 mb-4">${clickCount}. Rhombus ${area.toFixed(2)} cm² <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-normal py-1 px-2 rounded ">
                Convert to m²</button></p>`;
  }
});
// for clicked pentagon eventlistener
document.getElementById("pentagon-btn").addEventListener("click", function () {
  const perimeter = getInputField1ValueByID("p-input-pentagon");
  const height = getInputField2ValueByID("b-input-pentagon");
  const area = calculateArea(perimeter, height, "pentagon");
  if (area) {
    clickCount++;
    resultCalculationDiv.innerHTML += `<p class="ml-4 mb-4">${clickCount}. Pentagon ${area.toFixed(2)} cm² <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-normal py-1 px-2 rounded ">
                Convert to m²</button></p>`;
  }
});
// for clicked ellipse eventlistener
document.getElementById("ellipse-btn").addEventListener("click", function () {
  const a = getInputField1ValueByID("a-input-ellipse");
  const b = getInputField2ValueByID("b-input-ellipse");
  const area = calculateArea(a, b, "ellipse");
  if (area) {
    clickCount++;
    resultCalculationDiv.innerHTML += `<p class="ml-4 mb-4">${clickCount}. Ellipse ${area.toFixed(2)} cm². <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-normal py-1 px-2 rounded ">
                Convert to m²</button></p>`;
  }
});
  // Get all the cards on the page
  const cards = document.querySelectorAll(".cards-hover-bg");
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      // Generate a random color
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      card.style.backgroundColor = "#" + randomColor;
      
    });
    card.addEventListener("mouseleave", () => {
      card.style.backgroundColor = "#fff";
    });
  });


