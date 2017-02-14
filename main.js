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
  var day1 = new Date("2/1/2017");
  var today= new Date();

  // displays date difference
  var daysSinceStart = daysBetween(day1, today) - 1;
  document.getElementById("together").innerHTML = daysSinceStart;

  // displays 'days until we meet again!'
  var meetDate = new Date("3/10/2017"); // 2017.03.10
  var daysToMeet = daysBetween(today, meetDate);
  document.getElementById("meet").innerHTML = daysToMeet;

  // Get News
  httpGetAsync(
    'https://newsapi.org/v1/articles?source=techcrunch&apiKey=e2d74b94a5a84ac984b1def211e611fb',
    buildResponse);

    if (typeof(Storage) !== "undefined") {
      console.log(' Code for localStorage/sessionStorage.');
    } else {
      console.log('Sorry! No Web Storage support..');
    }
};

function daysBetween(date1, date2) {
  //Get 1 day in milliseconds
  var oneDay = 1000 * 60 * 60 * 24;

  // Convert both dates to milliseconds
  var date1Ms = date1.getTime();
  var date2Ms = date2.getTime();


  // Calculate the difference in milliseconds
  var differenceMs = date2Ms - date1Ms;

  // Convert back to days and return
  // return differenceMs / oneDay;


  var timeDiff = Math.abs(date2.getTime() - date1.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays;
}

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    // console.log(xmlHttp.responseText);
    return xmlHttp.responseText;
}

function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

function buildResponse(response) {
  var news = JSON.parse(response);
  console.log(news.articles);
}
