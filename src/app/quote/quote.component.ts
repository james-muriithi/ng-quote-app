import { Component, Input, OnInit } from '@angular/core';
import { Quote } from 'src/shared/quote.model';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {
  @Input() quote: Quote = new Quote(
    'Kobe',
    'The moment you give up, is the moment you let someone else win',
    "James Muriithi",
    new Date("2021-12-29T18:03:00")
  );

  constructor() {}

  ngOnInit(): void {}
}
