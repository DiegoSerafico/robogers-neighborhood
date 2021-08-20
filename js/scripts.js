function beepBoop (num) {
  if (isNaN(parseInt(num))) {
    return NaN;
  }
  let result = [];
  for (let i = 0; i <= num; i++) {
    result.push(i);
  }
  return result;
}