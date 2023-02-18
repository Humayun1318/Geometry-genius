
const visualizeBtnPara = document.getElementById("btn-for-visualize-input-para");
const inputFieldsPara = document.getElementById("input-fields-para");

visualizeBtnPara.addEventListener("click", () => {
  inputFieldsPara.classList.toggle("hidden");
  inputFieldsPara.style.marginBottom= '16px';
});

const visualizeBtnRhombus = document.getElementById("btn-for-visualize-input-rhombus");
const inputFieldsRhombus = document.getElementById("input-fields-rhombus");

visualizeBtnRhombus.addEventListener("click", () => {
  inputFieldsRhombus.classList.toggle("hidden");
  inputFieldsRhombus.style.marginBottom= '16px';
});

const visualizeBtnPentagon = document.getElementById("btn-for-visualize-input-pentagon");
const inputFieldsPentagon = document.getElementById("input-fields-pentagon");

visualizeBtnPentagon.addEventListener("click", () => {
  inputFieldsPentagon.classList.toggle("hidden");
  inputFieldsPentagon.style.marginBottom = "16px";
});

const visualizeBtnEllipse = document.getElementById("btn-for-visualize-input-ellipse");
const inputFieldsEllipse = document.getElementById("input-fields-ellipse");

visualizeBtnEllipse.addEventListener("click", () => {
  inputFieldsEllipse.classList.toggle("hidden");
  inputFieldsEllipse.style.marginBottom = "16px";
});



// checked and set the input values           
const checkbox = document.getElementById("checkbox-for-tack-value-triangle");
const baseValueDisplay = document.getElementById("take-from-base-input-triangle");
const heightValueDisplay = document.getElementById("take-from-height-input-triangle");
const baseInput = document.getElementById("base-input");
const heightInput = document.getElementById("height-input");
let storedBaseValue = null;
let storedHeightValue = null;

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    // Checkbox is checked, store the input field values
    storedBaseValue = baseInput.value;
    storedHeightValue = heightInput.value;
    baseValueDisplay.innerText = storedBaseValue;
    heightValueDisplay.innerText = storedHeightValue;
  } else {
    // Checkbox is unchecked, use the stored values if available
    if (storedBaseValue && storedHeightValue) {
      baseValueDisplay.innerText = storedBaseValue;
      heightValueDisplay.innerText = storedHeightValue;
    } else {
      // No stored values, reset to "00"
      baseValueDisplay.innerText = "00";
      heightValueDisplay.innerText = "00";
    }
  }
});

const checkboxRectangle = document.getElementById("checkbox-for-tack-value-rectangle");
const widthValueDisplayRectangle = document.getElementById("take-from-width-input-rectangle");
const lengthValueDisplayRectangle = document.getElementById("take-from-length-input-rectangle");
const widthInputRectangle = document.getElementById("w-input-rectangle");
const lengthInputRectangle = document.getElementById("l-input-rectangle");
let storedWidthValueRectangle = null;
let storedLengthValueRectangle = null;

checkboxRectangle.addEventListener("click", () => {
  if (checkboxRectangle.checked) {
    // Checkbox is checked, store the input field values
    storedWidthValueRectangle = widthInputRectangle.value;
    storedLengthValueRectangle = lengthInputRectangle.value;
    widthValueDisplayRectangle.innerText = storedWidthValueRectangle;
    lengthValueDisplayRectangle.innerText = storedLengthValueRectangle;
  } else {
    // Checkbox is unchecked, use the stored values if available
    if (storedWidthValueRectangle && storedLengthValueRectangle) {
      widthValueDisplayRectangle.innerText = storedWidthValueRectangle;
      lengthValueDisplayRectangle.innerText = storedLengthValueRectangle;
    } else {
      // No stored values, reset to "00"
      widthValueDisplayRectangle.innerText = "00";
      lengthValueDisplayRectangle.innerText = "00";
    }
  }
});
