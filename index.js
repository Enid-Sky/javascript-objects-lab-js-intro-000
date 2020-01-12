function updateObjectWithKeyAndValue (object, key, value) {
  object[key] = value;
  return object;
}

function updateObjectWithKeyAndValue (object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value;
  return object;
}


function deleteFromObjectByKey (object, key, value) {
  var newObj = Object.assign({}, object);
  delete newObj.key;
  return newObj;
}

function deleteFromObjectBykey (object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

