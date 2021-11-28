import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ValueInputComponent } from './feature/life-cycle/value-input/value-input.component';
import { ObjectInputComponent } from './feature/life-cycle/object-input/object-input.component';
import { WithServiceComponent } from './feature/life-cycle/with-service/with-service.component';
import { LifeCycleContainerComponent } from './feature/life-cycle/life-cycle-container/life-cycle-container.component';
import { WithObservableComponent } from './feature/life-cycle/with-observable/with-observable.component';
import { DirtyCheckingContainerComponent } from './feature/dirty-checking/dirty-checking-container/dirty-checking-container.component';
import { DomainAlphaComponent } from './feature/dirty-checking/domain-alpha/domain-alpha.component';
import { DomainBetaComponent } from './feature/dirty-checking/domain-beta/domain-beta.component';
import { SubChildAComponent } from './feature/dirty-checking/sub-child-a/sub-child-a.component';
import { SubChildBComponent } from './feature/dirty-checking/sub-child-b/sub-child-b.component';
import { HighlightCheckDirective } from './feature/dirty-checking/highlight-check.directive';
import { GreetingComponent } from './feature/dirty-checking/greeting/greeting.component';
import { CounterDisplayComponent } from './feature/dirty-checking/counter-display/counter-display.component';
import { SubChildCComponent } from './feature/dirty-checking/sub-child-c/sub-child-c.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ValueInputComponent,
    ObjectInputComponent,
    WithServiceComponent,
    LifeCycleContainerComponent,
    WithObservableComponent,
    DirtyCheckingContainerComponent,
    DomainAlphaComponent,
    DomainBetaComponent,
    SubChildAComponent,
    SubChildBComponent,
    HighlightCheckDirective,
    GreetingComponent,
    CounterDisplayComponent,
    SubChildCComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
