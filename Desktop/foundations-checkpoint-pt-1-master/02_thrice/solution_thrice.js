function thrice(func) {
  let counter = 0;
  return function() {
    if (counter < 3) {
      counter++;
      return func();
    }
    return undefined;
  };
}
