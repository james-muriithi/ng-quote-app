import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BannerComponent } from './banner/banner.component';
import { QuotesSectionComponent } from './quotes-section/quotes-section.component';
import { QuoteComponent } from './quote/quote.component';
import { TimeElapsedPipe } from './time-elapsed.pipe';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { AddQuoteModalComponent } from './add-quote-modal/add-quote-modal.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HighlightQuoteDirective } from './directives/highlight-quote.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    QuotesSectionComponent,
    QuoteComponent,
    TimeElapsedPipe,
    QuoteDetailsComponent,
    AddQuoteModalComponent,
    FooterComponent,
    HighlightQuoteDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
