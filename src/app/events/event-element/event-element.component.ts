import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../core/models/event';

@Component({
  selector: 'wdc-event-element',
  templateUrl: './event-element.component.html',
  styleUrls: ['./event-element.component.scss'],
})
export class EventElementComponent implements OnInit {
  @Input() event: Event;
  @Output() voted = new EventEmitter<Event>();
  constructor() {}

  ngOnInit() {}

  vote() {
    this.event.votes++;
    this.voted.emit(this.event);
  }
}
