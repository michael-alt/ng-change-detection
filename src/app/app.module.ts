import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ValueInputComponent } from './feature/life-cycle/value-input/value-input.component';
import { ObjectInputComponent } from './feature/life-cycle/object-input/object-input.component';
import { WithServiceComponent } from './feature/life-cycle/with-service/with-service.component';
import { LifeCycleContainerComponent } from './feature/life-cycle/life-cycle-container/life-cycle-container.component';
import { WithObservableComponent } from './feature/life-cycle/with-observable/with-observable.component';

@NgModule({
  declarations: [AppComponent, CardComponent, ValueInputComponent, ObjectInputComponent, WithServiceComponent, LifeCycleContainerComponent, WithObservableComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
