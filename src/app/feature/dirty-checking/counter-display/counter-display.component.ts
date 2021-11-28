import { Component } from '@angular/core';
import { map } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
})
export class CounterDisplayComponent {

  count$ = this.counterSvc.counter$.pipe(map(counter => counter.count));

  constructor(private counterSvc: CounterService) { }

  inc() {
    this.counterSvc.incImmutable();
  }
}
