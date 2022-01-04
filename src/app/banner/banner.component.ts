import { Component, OnInit } from '@angular/core';
import { Quote } from '../shared/quote.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  constructor() {}

  defaultQuote: Quote = new Quote(
    Quote.generateRandomId(),
    'Kobe',
    'The moment you give up, is the moment you let someone else win',
    new Date()
  );

  ngOnInit(): void {}
}
