import { Directive, DoCheck, ElementRef } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';

@Directive({
  selector: '[appHighlightCheck]'
})
export class HighlightCheckDirective implements DoCheck {

  constructor(private elt: ElementRef, private highlightSvc: HighlightService) { }

  ngDoCheck(): void {
    this.highlightSvc.highlight(this.elt);
  }

}
