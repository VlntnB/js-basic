const password = 'qwert';
function crypto(pass){
    const passSplit = pass.split('');
    const passMix = passSplit.reverse();
    const passString = passMix.join('');
    console.log(passString);
}
crypto('qwert');

function check(password, passwordMix){
    const checkSplit = passwordMix.split('');
    const checkSplitReverse = checkSplit.reverse();
    const checkString = checkSplitReverse.join('');
if (checkString === password){
    console.log('true');
}else{
    console.log('wrong');
}
}
check('qwert', 'trewq');
