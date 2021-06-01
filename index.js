// Code your solutions in this file

function writeCards(names, event){
  let birthday = [];
  event = "surprise";
  for (let i = 0; i < names.length; i++){
    birthday[i] = 'Thank you, '+ names[i] +', for the wonderful ' +event+' gift!';
  }
  return birthday;
}

function countDown (number) {
  while (number >= 0) {
    console.log(number--);
  }
}
