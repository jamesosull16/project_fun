$(document).ready(function () {
  var getCalendar = function () {
    var requestUrl =
      "https://calendarific.com/api/v2/holidays?api_key=243b50890c210a5cfad34ab2a2a57915a0dc10bb";
    //ajax call
    $.ajax({
      url: requestUrl,
      method: "GET",
    }).then(function (data) {
      console.log(data);
    });
  };

  //event listeners
  $(".is-info").on("click", getCalendar);
});
