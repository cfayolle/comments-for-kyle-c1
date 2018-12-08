function thrice(func) {
  let counter = 0;
  return function() {
    if (counter < 3) {
      counter++;
      return func();
    }
    return undefined;

    // JavaScript functions return undefined by default so line 8 is unnecessary!
  };
}
