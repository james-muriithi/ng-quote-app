import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Quote } from '../../shared/quote.model';
import {Modal} from 'bootstrap';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @ViewChild('addQuoteModalElement') addQuoteModalElement : ElementRef;

  constructor() {}

  defaultQuote: Quote = new Quote(
    'Kobe',
    'The moment you give up, is the moment you let someone else win',
    'James Muriithi',
    new Date()
  );

  addQuoteModal: any;

  ngOnInit(): void {
    // this.addQuoteModal = new Modal(this.addQuoteModalElement.nativeElement, {});
  }
  ngAfterViewInit():void{
    console.log(this.addQuoteModalElement);
    this.addQuoteModal = new Modal(this.addQuoteModalElement.nativeElement, {});
    this.addQuoteModal.show();
    
  }
}
