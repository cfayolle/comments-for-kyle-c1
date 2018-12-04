function rightTriangle(num) {
  let triangle = "";
  for (let i = num; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      triangle += "*";
    }
    if (i !== 1) {
      triangle += "\n";
    }
  }
  return triangle;
}
