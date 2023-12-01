const answer = prompt('Choose a languages');
switch (true) {
    case answer==='ru':
     console.log('Здравствуйте!');
     break;
     case answer==='en':
     console.log('Hello!');
     break;
     case answer==='de':
     console.log('Gutten tag!');
     break;
     default:
        console.log('Choose a languages');
}