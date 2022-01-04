import { Component, Input, OnInit } from '@angular/core';
import { Quote } from 'src/shared/quote.model';

@Component({
  selector: 'app-quotes-section',
  templateUrl: './quotes-section.component.html',
  styleUrls: ['./quotes-section.component.scss']
})
export class QuotesSectionComponent implements OnInit {

  @Input() quotes:Quote[];

  constructor() { }

  ngOnInit(): void {
  }

}
