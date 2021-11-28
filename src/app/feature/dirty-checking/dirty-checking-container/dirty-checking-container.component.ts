import { AfterViewInit, ApplicationRef, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-dirty-checking-container',
  templateUrl: './dirty-checking-container.component.html',
})
export class DirtyCheckingContainerComponent implements AfterViewInit {

  @ViewChild('appRefBtn')
  appRefBtn!: ElementRef<HTMLButtonElement>;

  constructor(private counterSvc: CounterService, private zone: NgZone, private appRef: ApplicationRef) { }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.appRefBtn.nativeElement.addEventListener('click', () => {
        this.zone.run(() => { this.appRef.tick(); });
      });
    })
  }

  incCounter() {
    this.counterSvc.incImmutable();
  }

  intervalTimer?: number;

  toggleInterval() {
    if (typeof this.intervalTimer === 'undefined') {
      this.intervalTimer = window.setInterval(() => {}, 5000);
    } else {
      clearInterval(this.intervalTimer);
      this.intervalTimer = undefined;
    }
  }
}
