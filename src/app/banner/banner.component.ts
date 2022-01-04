import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../shared/quote.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @Output() addNewQuoteEvent = new EventEmitter<Quote>();
  constructor() {}

  defaultQuote: Quote = new Quote(
    'Kobe',
    'The moment you give up, is the moment you let someone else win',
    'James Muriithi',
    new Date()
  );

  ngOnInit(): void {}

  addNewQuote(quote: Quote) {
    this.addNewQuoteEvent.emit(quote);
    
  }
}
