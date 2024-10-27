function currentFlags(arr) {
  return arr.map((prop) => ({
    id: prop.toLowerCase(),
    name: prop,
  }));
}

function limitsByKey(arr, key) {
  return [
    Math.min(...arr.map((obj) => obj[key])),
    Math.max(...arr.map((obj) => obj[key])),
  ];
}

function activeFlags(flags, flagIds) {
  return [...flags.filter((flag) => flagIds.includes(flag.id))];
}

function isInRange(value, [min, max]) {
  return value >= min && value <= max;
}

const checkFromAllowed = (value, allowed, paramName) => {
  if (!value) {
    return true;
  }

  const arr = value.split(",").map((val) => val.trim());
  
  for (const val of arr) {
    if (!allowed.map(el => el.toLowerCase()).includes(val)) {
      throw new Error(`Invalid param value. Param name: ${paramName}, param value: ${val}`);
    }
  }
  return true;
}

module.exports = { currentFlags, limitsByKey, activeFlags, isInRange, checkFromAllowed };
