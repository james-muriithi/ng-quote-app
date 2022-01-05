import { Component } from '@angular/core';
import { Quote } from 'src/shared/quote.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-quotes';

  openModal: Boolean = false;

  quotes = [
    new Quote(
      'Kobe',
      'The moment you give up, is the moment you let someone else win',
      'James Muriithi',
      new Date('2021-12-29T18:03:00')
    ),
    new Quote(
      'Oscar Wilde',
      'It is what you read when you don’t have to that determines what you will be when you can’t help it.',
      'James Muriithi',
      new Date('2022-01-01T18:03:00')
    ),
    new Quote(
      'John Keats',
      'I was never afraid of failure; for I would sooner fail than not be among the greatest.',
      'John Keats',
      new Date('2021-12-26T18:03:00')
    ),
    new Quote(
      'Toni Morrison',
      "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
      'James Muriithi',
      new Date('2021-12-25T18:03:00')
    ),
  ];

  addQuote(quote: Quote) {
    this.quotes.unshift(quote);
  }
}
