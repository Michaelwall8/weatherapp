//--------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------/  Homework 6, Weather Dashboard  /----------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

// Search Button
let searchBtn = document.getElementById('searchBtn');

// Initial array of city names
let cities = []

//Get cities From LS
if (localStorage.getItem('LScities') !== null){
  cities = localStorage.getItem('LScities');
  cities = JSON.parse(cities);
  display();
}


//time variables
let currentDate = new Date();
let cDate = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();

let currentDay = cDate + '/' + cMonth + '/' + cYear;
document.getElementById('date').innerHTML = currentDay;
for (let i=0; i < 5 ;i++){
  cDate = cDate + 1;
  currentDay = cDate + '/' + cMonth + '/' + cYear;
  document.getElementsByClassName('h6')[i].innerHTML = currentDay;
}

