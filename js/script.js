let clickCount = 0; // initialize global click count

const resultCalculationDiv = document.getElementById("result");

document.getElementById("triangle-btn").addEventListener("click", function () {
  const base = getInputField1ValueByID("base-input");
  const height = getInputField2ValueByID("height-input");
  const area = calculateArea(base, height, "triangle");
  if (area) {
    clickCount++;
    resultCalculationDiv.innerHTML += `<p class="text-center mb-4">${clickCount}. Triangle is ${area} cm² <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-normal py-1 px-2 rounded "
              >
                Convert to m²
              </button></p>`;
  }
});

document.getElementById("pentagon-btn").addEventListener("click", function () {
  const perimeter = getInputField1ValueByID("p-input-pentagon");
  const height = getInputField2ValueByID("b-input-pentagon");
  const area = calculateArea(perimeter, height, "pentagon");
  if (area) {
    clickCount++;
    resultCalculationDiv.innerHTML += `<p class="text-center mb-4">${clickCount}. Pentagon is ${area} cm². <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-normal py-1 px-2 rounded "
              >
                Convert to m²
              </button></p>`;
  }
});
document.getElementById("rhombus-btn").addEventListener("click", function () {
  const d1 = getInputField1ValueByID("d1-input-rhombus");
  const d2 = getInputField2ValueByID("d2-input-rhombus");
  const area = calculateArea(d1, d2, "pentagon");
  if (area) {
    clickCount++;
    resultCalculationDiv.innerHTML += `<p class="text-center mb-4">${clickCount}. Pentagon is ${area} cm². <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-normal py-1 px-2 rounded "
              >
                Convert to m²
              </button></p>`;
  }
});
