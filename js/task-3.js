function getElementWidth(content, padding, border) {
  const contentNumber = Number.parseFloat(content);
  const horizontalPadding = Number.parseFloat(padding) * 2;
  const borderThickness = Number.parseFloat(border) * 2;
  const totalElementWidth = contentNumber + horizontalPadding + borderThickness;
  return totalElementWidth;
}

console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));
