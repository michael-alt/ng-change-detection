/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
import { Component, DoCheck, Input, NgZone, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-with-observable',
  templateUrl: './with-observable.component.html',
  styles: [
  ]
})
export class WithObservableComponent implements OnChanges, OnInit, DoCheck {

  @Input()
  counter!: { count: number }

  messages: string[] = [];
  name = 'With Observable';

  constructor(private counterSvc: CounterService, private zone: NgZone) {
    counterSvc.counter$.subscribe(counter => this.counter = counter);
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
