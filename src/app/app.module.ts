import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BannerComponent } from './banner/banner.component';
import { QuotesSectionComponent } from './quotes-section/quotes-section.component';
import { QuoteComponent } from './quote/quote.component';
import { TimeElapsedPipe } from './time-elapsed.pipe';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    QuotesSectionComponent,
    QuoteComponent,
    TimeElapsedPipe,
    QuoteDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
