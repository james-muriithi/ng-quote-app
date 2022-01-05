import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from 'src/shared/quote.model';

@Component({
  selector: 'app-quotes-section',
  templateUrl: './quotes-section.component.html',
  styleUrls: ['./quotes-section.component.scss'],
})
export class QuotesSectionComponent implements OnInit {
  @Input() quotes: Quote[];

  @Output() openModalEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deleteQuote(quoteId: string) {
    this.quotes = this.quotes.filter((q) => q.id !== quoteId);
  }
}
