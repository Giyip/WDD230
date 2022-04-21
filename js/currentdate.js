const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);
const todaysdate = new Date();

//const daynames = [
  //"Sunday",
  //"Monday",
  //"Tuesday",
  //"wednesday",
  //"Thursday",
  //"Friday",
  //"Saturday",
  //"Sunday",
//];

//const months = [
  //"January",
  //"February",
  //"March",
  //"April",
  //"May",
  //"June",
  //"July",
  //"August",
  //"September",
  //"October",
  //"November",
  //"December",
//];
//const todaysdate = new Date();
//const dayName = dayNames[todaysdate.getDate()];
//const monthName = months[todaysdate.getMonth()];
//const year = todaysdate.getFullYear;
//const currentdate = dayName + ", " + todaysdate.getDate() + " " + monthName + ", " + todaysdate.getFullYear();

//document.getElementById('currentdate').textContent = currentdate;