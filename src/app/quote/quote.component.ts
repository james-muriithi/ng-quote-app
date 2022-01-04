import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from 'src/shared/quote.model';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {
  @Input() quote: Quote;
  
  @Output() deleteQuoteEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  deleteQuote() {
    this.deleteQuoteEvent.emit(this.quote.id);
  }
}
