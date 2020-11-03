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

  // On button click: get city from input field and display calendar
  $("#searchButton").click(function (e) {
    e.preventDefault();
    // First clear any previous calendar
    $("#calendarSection").empty();
    var city = $("#cityInput").val();
    $("#calendarSection").append("<p class='title'>" + city + " Events</p><div class='TMCalendar' w-type='calendar' w-tmapikey='hHXZ1EuJQGj9RCmG0Zi8qJAdIfdz7Sii' w-keyword='' w-theme='calendar' w-colorscheme='light' w-width='298' w-height='400' w-size='50' w-border='1' w-borderradius='4' w-postalcode='' w-radius='25' w-countrycode='US' w-city=" + city + " w-period='week' w-periodweek='week' w-layout='vertical' w-classificationid='' w-attractionid='' w-promoterid='' w-venueid='' w-affiliateid='' w-segmentid='' w-proportion='standart' w-latlong=''></div>");
    $.getScript('https://ticketmaster-api-staging.github.io/products-and-docs/widgets/calendar/1.0.0/lib/main-widget.js', function () {
      console.log('Load was performed.');
    });
  });

  getHolidays();

});

//event listeners
$(".is-info").on("click");
