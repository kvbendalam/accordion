import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccComponent } from './acc/acc.component';
import { AccItemComponent } from './acc-item/acc-item.component';


@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AccComponent,
    AccItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
