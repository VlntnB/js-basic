const card = '4276-2574-2047-8224';
function checkCard() {
    let sum = 0;
    const cardNum=card.replaceAll('-', '');
    if (cardNum.length !== 16){
        return false;
    }
    for (let i = 0; i < cardNum.length; i += 1) {
    let num = Number(cardNum[i]);
    if (i % 2 === 0){
      num *= 2;
      if (num > 9) {
        num -= 9;
      }
    }
    sum += num;
  }
  return Number(sum % 10) === 0;
    }
console.log(checkCard(card));
