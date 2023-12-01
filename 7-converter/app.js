function converterRubTo(money,  exchangeCurrensy, currensy='rub'){
   const rubToUsd = 50;
   const rubToEur = 70;
   const rubToKzt = 0.20;
   switch (true){
    case exchangeCurrensy==='usd':
        return converterRubToUsd = money / rubToUsd;
     case exchangeCurrensy==='eur':
        return converterRubToEur = money / rubToEur;
    case exchangeCurrensy==='kzt':
        return converterRubToKzt = money / rubToKzt;
        default:
            return null;
   }
}
console.log(converterRubTo(100, 'usd'));
