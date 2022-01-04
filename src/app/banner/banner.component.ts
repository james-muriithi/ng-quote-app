import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  constructor() {}

  defaultQuote = {
    author: 'Kobe',
    quote: 'The moment you give up, is the moment you let someone else win',
  };

  ngOnInit(): void {}
}
