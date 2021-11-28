import { Component, DoCheck, ElementRef } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';

@Component({
  selector: 'app-domain-beta',
  templateUrl: './domain-beta.component.html',
})
export class DomainBetaComponent implements DoCheck {

  name = 'Domain B';

  constructor(private elt: ElementRef, private highlightSvc: HighlightService) {}

  ngDoCheck(): void {
    this.highlightSvc.highlight(this.elt);
  }
}
