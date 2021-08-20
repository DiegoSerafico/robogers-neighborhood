function beepBoop (num) {
  if (isNaN(parseInt(num))) {
    return NaN;
  }
  return num;
}