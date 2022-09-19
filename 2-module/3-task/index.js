let calculator = {
  read(a, b){
    this.oneProperty = a;
    this.twoProperty = b;
  },
  sum() {
    return this.oneProperty + this.twoProperty;
  },
  mul() {
    return this.oneProperty * this.twoProperty;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
