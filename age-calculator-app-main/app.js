let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');

let num_month = document.getElementById('num-month');
let num_day = document.getElementById('num-day');
let num_year = document.getElementById('num-years');

let btn_submit = document.getElementById('btn-submit');
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let div_day=document.getElementById('Day-out');
let div_Month=document.getElementById('Month-out');
let div_Year=document.getElementById('Year-out');

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

btn_submit.addEventListener('click', function() {
 

  let d = parseInt(day.value);
  let m = parseInt(month.value);
  let y = parseInt(year.value);

  const date = new Date();
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yy = date.getFullYear();

  let ansDay = 0;
  let ansMonth = 0;
  let ansYear = 0;

  if(!d ||d>31)
  {
   div_day.style.display='block';
  }
  if(!m ||m>13)
  {

    div_Month.style.display='block';
  }
  if(!y ||y>yy)
  {
   div_Year.style.display='block';   
  }
  else{
    
  if (isLeapYear(yy)) {
    months[1] = 29;
  } else {
    months[1] = 28;
  }

  // Calculate day difference
  if (d > dd) {
    dd += months[mm - 1];
    mm -= 1;
  }
  // Calculate month difference
  if (m > mm) {
    mm += 12;
    yy -= 1;
  }
  // Final calculations
  ansDay = dd - d;
  ansMonth = mm - m;
  ansYear = yy - y;

  // Update HTML with results
  div_day.style.display='none';
  div_Month.style.display='none';
  div_Year.style.display='none';   
  num_day.innerHTML = ansDay;
  num_month.innerHTML = ansMonth;
  num_year.innerHTML = ansYear;
  
}
});
