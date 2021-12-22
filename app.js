function displayTime() {
  const now = new Date();
  let hr,
    min = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes(),
    sec = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds(),
    ampm = now.getHours() >= 12 ? "PM" : "AM";
  // replace 0 with 12 at midnight, subtract 12 from hours after midnight(hours are 13-23)
  if (now.getHours() === 0) {
    hr = 12;
  } else if (now.getHours() > 12) {
    hr = now.getHours() - 12;
  } else {
    hr = now.getHours();
  }
  // define current time
  let currentTime = `${hr}:${min}:${sec}`;
  // print time
  document.querySelectorAll("#hms")[0].innerHTML = currentTime;
  document.querySelectorAll("#ampm")[0].innerHTML = ampm;
  // now get date (month and day)
  const dow = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  day = now.getDate();
  // store date
  let currentDate =
    dow[now.getDay()] + ", " + month[now.getMonth()] + " " + day;
  document.querySelectorAll("#date")[0].innerHTML = currentDate;
}
displayTime();
setInterval(function () {
  displayTime();
}, 1000);
