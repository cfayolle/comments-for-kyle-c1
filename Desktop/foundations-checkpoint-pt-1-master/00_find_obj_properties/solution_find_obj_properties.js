function findObjPropsHasOwn(obj) {
  let objKey = [];
  for (let keys in obj) {
    if (obj.hasOwnProperty(keys)) {
      objKey.push(keys);
    }
  }
  if (objKey.length === 1) {
    return objKey[0];
  }
  return objKey.join(", ");
}

function findObjKeys(obj) {
  let objKey = Object.keys(obj);
  return objKey.join(", ");
}
