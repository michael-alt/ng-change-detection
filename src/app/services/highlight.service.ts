import { ElementRef, Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HighlightService {

  checkIndex = 0;

  constructor(private zone: NgZone) {
    zone.onUnstable.subscribe(() => { this.checkIndex = 0; });
  }

  highlight(eltRef: ElementRef<HTMLElement>) {
    const elt = eltRef.nativeElement;
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        elt.classList.add('checked');
        setTimeout(() => {
          elt.classList.remove('checked');
        }, 500)
      }, 200 * this.checkIndex);
    });
    this.checkIndex++;
  }
}
