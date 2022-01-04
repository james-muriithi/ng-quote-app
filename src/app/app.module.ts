import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BannerComponent } from './banner/banner.component';
import { QuotesSectionComponent } from './quotes-section/quotes-section.component';
import { QuoteComponent } from './quote/quote.component';
import { TimeElapsedPipe } from './time-elapsed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    QuotesSectionComponent,
    QuoteComponent,
    TimeElapsedPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
