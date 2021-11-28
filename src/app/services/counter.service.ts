import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counter: {count: number} = { count: 0 };
  counter$ = new BehaviorSubject(this.counter);

  incByMutation() {
    this.counter.count++;
    this.counter$.next(this.counter);
  }

  incImmutable() {
    this.counter = { count: this.counter.count + 1 };
    this.counter$.next(this.counter);
  }

}
