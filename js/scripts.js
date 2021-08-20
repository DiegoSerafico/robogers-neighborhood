function beepBoop (num) {
  if (isNaN(parseInt(num))) {
    return NaN;
  }
  let result = [];
  for (let i = 0; i <= num; i++) {
    if (i.toString().includes("1")) {
      result.push("Beep!");
    } else {
      result.push(i);
    }
  }
  return result;
}