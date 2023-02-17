function calculateArea(val1, val2, shape) {
  // Check if the input values are valid numbers
  if (isNaN(val1) || isNaN(val2)) {
    alert('Please enter valid numbers for the base and height.');
    return;
  }

  // Check if the input values are non-negative
  if (val1 < 0 || val2 < 0) {
    alert('Please enter non-negative values for the base and height.');
    return;
  }

  // Calculate the area
  let area;
  if (shape === 'triangle') {
    area = 0.5 * val1 * val2;
  } else if (shape === 'pentagon') {
    area = 0.5 * val1 * val2;
  } else if (shape=== 'rhombus-btn'){
    area= 0.5 * val1* val2;
  }
  
  return area;
}