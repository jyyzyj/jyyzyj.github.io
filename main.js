window.onload = function(){
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var date = today.getDate();
  var day = today.getDay();
  var daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var time = daylist[day] + ", " + month + "/" + date + "/" + year;
  document.getElementById("today").innerHTML = time;

  //Set the two dates
  var y2k  = new Date(2007, 1, 1);
  var day1 = new Date(y2k.getFullYear() + 10, y2k.getMonth(), y2k.getDate());
  var today= new Date();

  //displays date difference
  console.log( 'Days since ' + day1.toLocaleDateString() + ': ' + daysBetween(day1, today));
  document.getElementById("together").innerHTML = daysBetween(day1, today);

};

function daysBetween(date1, date2) {
  //Get 1 day in milliseconds
  var oneDay=1000*60*60*24;

  // Convert both dates to milliseconds
  var date1Ms = date1.getTime();
  var date2Ms = date2.getTime();

  // Calculate the difference in milliseconds
  var differenceMs = date2Ms - date1Ms;

  // Convert back to days and return
  return Math.round(differenceMs / oneDay);
}
