let rateButtons = document.getElementsByClassName('btn');
let rate=-1;
let submite=document.querySelector('.sub');
let output=document.querySelector('.out');
let card=document.querySelector('.card2');
let card2=document.querySelector('.card');
Array.from(rateButtons).forEach(button => {
  button.addEventListener('click', function() {
    let index = Array.from(rateButtons).indexOf(button);
    Array.from(rateButtons).forEach(btn => btn.style.backgroundColor = ' hsl(217, 12%, 63%)');
    button.style.backgroundColor = 'hsl(25, 97%, 53%)';
    rate=index+1
  });
});

submite.addEventListener('click',function(){
submite.style.backgroundColor='hsl(25, 97%, 53%)'

card2.style.display='none';
card.style.display='block';
output.innerHTML='You selected '+rate+ ' out of 5 '


})