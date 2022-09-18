function getMinMax(str) {
  arr = str.split(' ').filter(item => !isNaN(item)).sort(compareNumeric);
  return  result = {
    'min': +arr[0],
    'max': +arr[arr.length - 1]
  }
    
}
function compareNumeric(a, b) {
  a = parseInt(a);
  b = parseInt(b);
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
