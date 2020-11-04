$(document).ready(function () {
  var getHolidays = function () {
    var year = moment().year();

    var requestUrl = `https://holidays.abstractapi.com/v1/?api_key=7639aa293d574a51bbeed5c5a63d90ac&country=US&year=${year}`;
    //ajax call
    $.ajax({
      url: requestUrl,
      method: "GET",
    }).then(function (data) {
      console.log(data);
      //   var holidaysDisplayed = 0;
      for (i = 0; i < data.lenth; i++) {
        var holiday = $("#holiday-box");

        var currentDate = moment().format("MM/DD/YYYY");
        console.log(currentDate);

        var holidayDate = data[i].date;
        holidayDate = moment(holidayDate).format("MM/DD/YYYY");
        console.log(holidayDate);

        var holidayName = $("<h3>");
        var holidayDateEl = $("<h3>");

        holidayName.text("Holiday: " + data[i].name);
        holidayDateEl.text("Date: " + holidayDate);

        var difference = moment(holidayDate).diff(moment(), "d");

        console.log(difference);

        if (difference > 0) {
          //   holidaysDisplayed++;
          //   console.log(holidaysDisplayed);
          holiday.append(holidayName);
          holiday.append(holidayDateEl);

          //   if (holidaysDisplayed > 2) {
          //     return;
        }
      }
    });
  };
  getHolidays();
});

//event listeners
$(".is-info").on("click");
