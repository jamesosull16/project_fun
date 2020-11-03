$(document).ready(function () {
  var getHolidays = function () {
    var currentDate = new Date();
    var dd = currentDate.getDate();
    var mm = currentDate.getMonth();
    var yyyy = currentDate.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = 0 + mm;
    }
    currentDate = mm + "/" + dd + "/" + yyyy;

    var requestUrl = `https://holidays.abstractapi.com/v1/?api_key=7639aa293d574a51bbeed5c5a63d90ac&country=US&year=${yyyy}`;
    //ajax call
    $.ajax({
      url: requestUrl,
      method: "GET",
    }).then(function (data) {
      console.log(data);
      for (i = 0; i < 3; i++) {
        var holiday = $("#holiday-box");
        var holidayName = $("<h3>");
        var holidayDate = $("<h3>");

        holidayName.text("Holiday: " + data[i].name);
        holidayDate.text("Date: " + data[i].date);

        if (holidayDate > currentDate) {
          // if (new Date(holidayDate).getTime() > new Date(currentDate).getTime()) {
          holiday.append(holidayName);
          holiday.append(holidayDate);
        }
      }
    });
  };
  getHolidays();
});

//event listeners
$(".is-info").on("click");
