/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
import { Component, DoCheck, Input, NgZone, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-value-input',
  templateUrl: './value-input.component.html',
})
export class ValueInputComponent implements OnChanges, OnInit, DoCheck{

  @Input()
  count!: number;

  messages: string[] = [];
  name = 'Value Input';

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
