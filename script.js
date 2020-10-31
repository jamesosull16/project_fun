$(document).ready(function () {
  var getHolidays = function () {
    var requestUrl = `https://calendarific.com/api/v2/holidays?&country=US&year=2020&type=national&api_key=243b50890c210a5cfad34ab2a2a57915a0dc10bb`;
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

        var currentDate = moment().format("MM/DD/YYYY");

        holidayName.text("Holiday: " + data.response.holidays[i].name);
        holidayDate.text(
          "Date: " +
            moment(data.response.holidays[i].date.iso).format("MM/DD/YYYY")
        );

        if (holidayDate > currentDate) {
          holiday.append(holidayName);
          holiday.append(holidayDate);
        }
      }
    });
  };

  //event listeners
  $(".is-info").on("click", getHolidays);
});
