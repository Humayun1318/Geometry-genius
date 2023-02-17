let clickCount = 0; // initialize global click count

const baseInput = document.getElementById('base-input');
const heightInput = document.getElementById('height-input');
const triangleBtn = document.getElementById('triangle-btn');
const pentagonBtn = document.getElementById('pentagon-btn');
const resultDiv = document.getElementById('result');

triangleBtn.addEventListener('click', function() {
  const base = parseFloat(baseInput.value);
  const height = parseFloat(heightInput.value);
  const area = calculateArea(base, height, 'triangle');
  if (area) {
    clickCount++;
    resultDiv.innerHTML += `<p>${clickCount}. The area of the triangle is ${area} cm².</p>`;
  }
});

pentagonBtn.addEventListener('click', function() {
  const base = parseFloat(baseInput.value);
  const height = parseFloat(heightInput.value);
  const area = calculateArea(base, height, 'pentagon');
  if (area) {
    clickCount++;
    resultDiv.innerHTML += `<p>${clickCount}. The area of the pentagon is ${area} cm².</p>`;
  }
});
