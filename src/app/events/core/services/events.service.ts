import { map } from 'rxjs/internal/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  events = [];
  apiUrl = `https://api.eventer.app/v1`;
  constructor(private httpClient: HttpClient) {}

  allFromApi(): Observable<Event[]> {
    return this.httpClient
      .get<{ events: Event[] }>(`${this.apiUrl}/events`)
      .pipe(map(eventsResponse => eventsResponse.events));
  }
}
