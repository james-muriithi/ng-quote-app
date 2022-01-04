import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from 'src/shared/quote.model';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.scss'],
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: Quote;

  @Output() deleteQuoteEvent = new EventEmitter();

  detailsOpen: Boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleDetails() {
    this.detailsOpen = !this.detailsOpen;
  }

  likeQuote() {
    this.quote.likes++;
    
  }

  dislikeQuote() {
    this.quote.dislikes++;
  }

  deleteQuote(){
    this.deleteQuoteEvent.emit();
  }
}
