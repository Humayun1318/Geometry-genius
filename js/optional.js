
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
// const baseValueDisplay = document.getElementById("take-from-base-input-triangle");
// const heightValueDisplay = document.getElementById("take-from-height-input-triangle");
const checkbox = document.getElementById("checkbox-for-tack-value-triangle");

// checkbox.addEventListener("click", () => {
    
//   if (checkbox.checked) {
//     const baseInput = getInputField1ValueByID("base-input");
//     const heightInput = getInputField2ValueByID("height-input");
//     baseValueDisplay.innerText =baseInput ;
//     heightValueDisplay.innerText = heightInput ;
//   } else{
//     baseValueDisplay.innerText = "00";
//     heightValueDisplay.innerText = "00";
//   }
// });

const baseValueDisplay = document.getElementById(
  "take-from-base-input-triangle"
);
const heightValueDisplay = document.getElementById(
  "take-from-height-input-triangle"
);
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
