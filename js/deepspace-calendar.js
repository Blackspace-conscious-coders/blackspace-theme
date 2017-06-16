        formatGoogleCalendar.init({
            calendarUrl:'https://www.googleapis.com/calendar/v3/calendars/theblackspace.org_57952iu42jn7442hm59rpgs39c@group.calendar.google.com/events?key=AIzaSyBWOwwwRQ5fGEZ2dlUDnI600N_RP7ACWE0',
            past: false,
            upcoming: true,
            pastTopN: 3,
            upcomingTopN: 7,
            itemsTagName: 'li',
            sameDayTimes: true,
            upcomingSelector: '#events-upcoming',
            recurringEvents: true,
            pastSelector: '#events-past',
            upcomingHeading: '',
            pastHeading: '<h2>Past events</h2>',
            format: ['<div class="wokeshop">','*summary*','<span class="moredetails">More Details</span></div>','*date*','*location*', '*description*']
        });
