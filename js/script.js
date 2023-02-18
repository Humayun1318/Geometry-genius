let clickCount = 0; // initialize global click count

const resultCalculationDiv = document.getElementById("result");

document.getElementById("triangle-btn").addEventListener("click", function () {
  const base = getInputField1ValueByID("base-input");
  const height = getInputField2ValueByID("height-input");
  const area = calculateArea(base, height, "triangle");
  if (area) {
    clickCount++;
    resultCalculationDiv.innerHTML += `<p class="text-center mb-4">${clickCount}. Triangle ${(area).toFixed(2)} cm² <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-normal py-1 px-2 rounded ">
                Convert to m²</button></p>`;
  }
});

document.getElementById("rectangle-btn").addEventListener("click", function () {
  const width = getInputField1ValueByID("w-input-rectangle");
  const length = getInputField2ValueByID("l-input-rectangle");
  const area = calculateArea(width, length, "rectangle");
  if (area) {
    clickCount++;
    resultCalculationDiv.innerHTML += `<p class="text-center mb-4">${clickCount}. Rectangle ${area.toFixed(2)} cm² <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-normal py-1 px-2 rounded ">
                Convert to m²</button></p>`;
  }
});

document
  .getElementById("parallelogram-btn").addEventListener("click", function () {
    const baseParallelogram = getInputField1ValueByID("b-input-parallelogram");
    const heightParallelogram = getInputField2ValueByID("h-input-parallelogram");
    const area = calculateArea(baseParallelogram,heightParallelogram,"parallelogram");
    if (area) {
      clickCount++;
      resultCalculationDiv.innerHTML += `<p class="text-center mb-4">${clickCount}.Parallelogram ${area.toFixed(2)} cm² <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-normal py-1 px-2 rounded ">
                Convert to m²</button></p>`;
    }
  });

document.getElementById("pentagon-btn").addEventListener("click", function () {
  const perimeter = getInputField1ValueByID("p-input-pentagon");
  const height = getInputField2ValueByID("b-input-pentagon");
  const area = calculateArea(perimeter, height, "pentagon");
  if (area) {
    clickCount++;
    resultCalculationDiv.innerHTML += `<p class="text-center mb-4">${clickCount}. Pentagon ${area.toFixed(2)} cm². <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-normal py-1 px-2 rounded ">
                Convert to m²</button></p>`;
  }
});
document.getElementById("rhombus-btn").addEventListener("click", function () {
  const d1 = getInputField1ValueByID("d1-input-rhombus");
  const d2 = getInputField2ValueByID("d2-input-rhombus");
  const area = calculateArea(d1, d2, "rhombus");
  if (area) {
    clickCount++;
    resultCalculationDiv.innerHTML += `<p class="text-center mb-4">${clickCount}. Rhombus ${area.toFixed(2)} cm². <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-normal py-1 px-2 rounded ">
                Convert to m²</button></p>`;
  }
});

