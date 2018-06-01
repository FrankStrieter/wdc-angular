import { Component, OnInit } from '@angular/core';
import { Event } from '../core/models/event';
import { EventsService } from '../core/services/events.service';

@Component({
  selector: 'wdc-event-board',
  templateUrl: './event-board.component.html',
  styleUrls: ['./event-board.component.scss'],
})
export class EventBoardComponent implements OnInit {
  events: Event[] = [];
  constructor(private eventsService: EventsService) {
    eventsService
      .allFromApi()
      .subscribe(eventsFromApi => this.events = eventsFromApi);
  }

  ngOnInit() {}

  sortEventsArray() {
    this.events.sort((a, b) => b.votes - a.votes);
  }
}
