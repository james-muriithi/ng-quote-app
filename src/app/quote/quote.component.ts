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
    new Date()
  );

  constructor() {}

  ngOnInit(): void {}
}
