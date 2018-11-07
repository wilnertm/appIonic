import { Component } from '@angular/core';

@Component({
  selector: 'calendar',
  templateUrl: 'calendar.html'
})
export class CalendarComponent {

  text: string;
  events:any []

  constructor() {
    console.log('Hello CalendarComponent Component');
  }

  ngOnInit() {
    this.events = [
        {
            "title": "All Day Event",
            "start": "2018-11-7"
        },
        {
            "title": "Long Event",
            "start": "2018-11-17",
            "end": "2018-11-19"
        },
        {
            "title": "Repeating Event",
            "start": "2018-11-09T16:00:00"
        },
        {
            "title": "Repeating Event",
            "start": "2018-11-16T16:00:00"
        },
        {
            "title": "Conference",
            "start": "2018-11-11",
            "end": "2018-11-13"
        }
    ];
}

}
