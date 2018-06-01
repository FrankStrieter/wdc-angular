import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventElementComponent } from './event-element/event-element.component';
import { EventBoardComponent } from './event-board/event-board.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [EventElementComponent, EventBoardComponent],
  exports: [EventBoardComponent],
})
export class EventsModule {}
