function ucFirst(str) {
  let symbolStr = "";
  if (str !== '') {
    for (let i = 0; i < str.length; i++) {
      if (i == 0) {
        symbolStr = str[i].toUpperCase();
        continue;
      }
      symbolStr = symbolStr + str[i];
    }
    return symbolStr;
  } else {
    return '';
  }
}
