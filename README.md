# Escape The House

Grace Kuo
James O’Sullivan
Jon Pointer
Kristabell Johnson

## Assignment

Group project to create a responsive application that utilized two APIs and local storage.

## Results

We created an application that helps you get out of the house by finding local events and notifying you of upcoming holidays.

### Path to GitHub Repository

<https://github.com/jamesosull16/project_fun>

### Path to GitHub Hosted Application

<https://jamesosull16.github.io/project_fun/>

### Screenshot of the completed application

![Escape the House Screenshot](./Capture.PNG)

## Index:

- Why Built
- Installation
- Usage
- Concepts
- Issues with the Ticketmaster Calendar
- Future Ideas
- Credits

### Why Built:

We built this application so that people can get out of the house and get away for the holidays. It gives a list of the holidays and a calendar provided by Ticketmaster. When you open the window you see a search bar listed by city. People can enter the city that they want to go to and then hit search. When they hit search button the calendar for Ticketmaster comes up with a list of events coming to the city they typed. They can look and browse through the events and decide where they want to go get out of the house or even buy a gift for the upcoming holidays. Next to the Ticketmaster website we put a calendar of all of the major and minor holidays in the US.

### Installation:

James set up the git project page while grace wrote down what was discussed and John drew a small outline of what we thought the site would look like. We discussed what we wanted to do and decided on a get away from your family during the holidays to a holiday /event calendar. Next class James was assigned the holiday calendar API and Kristabell the Ticketmaster API to look up online. Kristabell found the calendar widget but thought that we might be able to use the calendar widget instead of building our own calendar. Jon looked at it and started to work on the calendar widget while James worked on the holiday widget. Grace worked on the CSS and Kristabell worked on the paperwork for the Read me, the presentation and the slide show. Jon worked on making the widget compatibility with the site and also making the calendar the proper size. Grace worked on the css framework with Bulma. We just talked through everything and the ideas 3 even column under a header. She had to search Bulma for a placeholder for the calendar and add ons. There is a placeholder for the calendar and Ticketmaster APi widget. Jon and James used IP API address to get the users location to load a default calendar onto the website. Event listener was used to listen to the search button for the user return. CSS was used by Jon to make the Ticketmaster Calendar bigger. For the holidays API holidays the abstract api used Moments to get the current year date and time. Query was used to loop through data to get the holidays. James used The .dif method was used to insure appending. Only the future holidays are received.

### Usage

1. When the Person comes to the site they are treated with a simple clean look and a holiday theme.
2. The first thing on the right is the search bar.
3. Next to the search bar is the Ticketmaster event calendar
4. To the Right of the Ticketmaster calendar is a is a list of the most recent holidays
5. The holiday list includes all of the holidays we know plus some we have never heard. It is a great list to observe.
6. The user can enter the city in the search bar and the calendar widget will show the events that are coming for the city they choose.
7. The client can look up the information by days weeks or months.
8. When the user decides what event they want to attend and will be directed to Ticketmaster.

### Concepts:

Have you ever been sitting on your couch wondering…What a I going to do around Thanksgiving or better yet Christmas. The family will be visiting and I just want to be able to get out and escape the house and maybe the visitors. Maybe you want to take the family to one of the many concerts, plays, operas or other events in the area as a gift. Our site is made to help people get out of the house and have fun. When you find the date and place you want to go click on the link and it will bring you to Ticketmaster to buy tickets. There are a few handy calendars on our page that tell you what holidays are coming up in the future so you can plan ahead. With the amount of concerts, plays, ballets, sports events, comedians, Stock Shows, County fairs and much much more. There is no way you will not find an event to help you get out of the house.

We were looking for an app that could help people get ideas on where to go out during the holidays and other times of the year. First we had to decide where we were going to get the events Looking at many different Ideas for events we decided to use Ticket Master as the first integration of different events. Then a holiday calendar to remind people of the holidays that are coming up for celebration. The concept was simple but putting it together took a lot of effort time and teamwork. We are all individuals with unique Ideas and concepts but the site created is awesome.

### Issues with the TicketMaster calendar:

Jon mentioned that if people are looking for a year of information you will come up with an error message and it takes forever to try to get the information from the website. If a city has to many events or no events it will be slow.
//jQuery detect user pressing enter
\$(document).on('keypress',function(e) {
    if(e.which == 13) {
        alert('User pressed Enter!');
    }
});
If we need it - here's the documentation on the Ticketmaster error - if you don't already have it.
https://developer.ticketmaster.com/products-and-docs/apis/partner/availability/#:~:text=If%20you%20get%20a%20429,of%20violation%20of%20quota%20policy.
The Ticketmaster Developer Portal
Availability API
The Ticketmaster Partner API lets clients reserve, purchase, and retrieve ticket and event information. (33 kB)

### Future Ideas:

- We can add Api's like Evenbrite and Meetup to the site
- We can make the app International
- The holiday list can include international holidays
- Events can pay to advertise
- We can becomes one stop place for all major local events in the area where the clients live.

### Credits:

- Jeff= Teachers Assistant
- https://api.jquery.com/
- https://www.w3schools.com/
- https://developer.mozilla.org/en-US/
- Stack Overflow
- https://ip-api.com/
- https://bulma.io/
- https://developer.ticketmaster.com/
- https://www.abstractapi.com/holidays-api
