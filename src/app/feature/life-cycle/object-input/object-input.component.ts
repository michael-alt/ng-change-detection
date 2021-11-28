/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
import { Component, DoCheck, Input, NgZone, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-object-input',
  templateUrl: './object-input.component.html',
})
export class ObjectInputComponent implements OnChanges, OnInit, DoCheck {

  @Input()
  counter!: { count: number }

  messages: string[] = [];
  name = 'Object Input';

  constructor(private counterSvc: CounterService, private zone: NgZone) {
    this.zone.onUnstable.subscribe(() => {
      this.messages = [];
    });
    this.messages.push(`${this.name}: constructed`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.messages.push(`${this.name}: input changed`);
  }

  ngOnInit(): void {
    this.messages.push(`${this.name}: initialized`);
  }

  ngDoCheck(): void {
    this.messages.push(`${this.name}: dirty check call`);
  }

  incByMutation() {
    this.counterSvc.incByMutation();
  }

  incByRefChange() {
    this.counterSvc.incImmutable();
  }
}
