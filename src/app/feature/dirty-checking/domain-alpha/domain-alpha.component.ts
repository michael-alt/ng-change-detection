import { Component, DoCheck, ElementRef } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';

@Component({
  selector: 'app-domain-alpha',
  templateUrl: './domain-alpha.component.html',
})
export class DomainAlphaComponent implements DoCheck {

  name = 'Domain A';

  constructor(private elt: ElementRef, private highlightSvc: HighlightService) {}

  ngDoCheck(): void {
    this.highlightSvc.highlight(this.elt);
  }
}
