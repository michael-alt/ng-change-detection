import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-life-cycle-container',
  templateUrl: './life-cycle-container.component.html',
  styles: [
  ]
})
export class LifeCycleContainerComponent {

  @Input()
  counter!: { count: number};

  constructor() { }

}
