'use strict';

let atmTerminal = {

  banknoteInSafe: {
    "20": 0,
    "50": 0,
    "100": 0,
    "200": 0,
    "500": 0,
    "1000": 0
  },

  // Функция загрузки банкнот.
  uploadCash(key) {
    for (let a in key) {
      this.banknoteInSafe[a] = key[a];
    }
  },

  // Выводит количество банкнот по каждому наминалу в ATM
  totalSafeMoneyAtm() {
    for (let key in this.banknoteInSafe) {
      //console.log(key * this.banknoteInSafe[key]);
      console.log(this.banknoteInSafe[key]);
      //return this.banknoteInSafe[key];
    }
  },

  // Выдает наличные
  getMoney(money) {
    for (let key in this.banknoteInSafe) {
      if (key == money && this.banknoteInSafe[key] > 0) {
        this.banknoteInSafe[money] -= 1;
        valik.cashTotal += money;
      } else if (this.banknoteInSafe[key] == 0) {
        return console.log(`Валюта номиналом ${money} закончилась`);
      }
    }
  },

  // totalBalanceOfCard() {

  // },

};

let valik = {
  creditCard: 6000,
  cashTotal: 0,

  withdrawMoney(money) {
    if (this.creditCard > 0) {
      this.creditCard -= money;
      atmTerminal.getMoney(money);
    } else {
      console.log("Костян, бабки как вода...на кредитке 0");
    }
  }
};

atmTerminal.uploadCash({
  "20": 10,
  "50": 30,
  "100": 40,
  "200": 10,
  "500": 5,
  "1000": 14
});



valik.withdrawMoney(200)
valik.withdrawMoney(500)
valik.withdrawMoney(500)
valik.withdrawMoney(500)
valik.withdrawMoney(1000)
valik.withdrawMoney(1000)
valik.withdrawMoney(1000)
valik.withdrawMoney(200)
valik.withdrawMoney(100)
valik.withdrawMoney(1000)
valik.withdrawMoney(1000)



console.log(atmTerminal.banknoteInSafe);
console.log(valik);

//atmTerminal.totalSafeMoneyAtm();
