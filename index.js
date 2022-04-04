function scuberGreetingForFeet(someValue){
  if (someValue <= 400) {
    return 'This one is on me!';
  }
  else if (someValue <= 2000 && someValue >= 400) {
    return 'That will be twenty bucks.';
  }
  else if (someValue > 2000 && someValue < 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else
    return 'No can do.';
}

function ternaryCheckCity(someCity){
  if (someCity == 'NYC') {
    return 'Ok, sounds good.';
  }
  else
    return 'No go.';
}

function switchOnCharmFromTip(tipType){
  if (tipType == 'generous') {
    return 'Thank you so much.';
  }
  if (tipType == 'not as generous') {
    return 'Thank you.';
  }
  else 
    return 'Bye.';
}