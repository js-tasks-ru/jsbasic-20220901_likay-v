function showSalary(users, usAge) {
  let str = '';
    for(let {name, age, balance} of users){
    if(age <= usAge){
      str = str + (str ? '\n' : '') + name + ", " + balance;
    }
  }
  return str;
}
