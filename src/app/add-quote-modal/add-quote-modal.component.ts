import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Modal } from 'bootstrap';
import { Quote } from 'src/shared/quote.model';

@Component({
  selector: 'app-add-quote-modal',
  templateUrl: './add-quote-modal.component.html',
  styleUrls: ['./add-quote-modal.component.scss'],
})
export class AddQuoteModalComponent implements OnInit {
  @ViewChild('addQuoteModalElement') addQuoteModalElement: ElementRef;

  author: string;
  quote: string;
  createdBy: string;

  addQuoteModal: any;
  @Output() addNewQuoteEvent = new EventEmitter<Quote>();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.addQuoteModal = new Modal(this.addQuoteModalElement.nativeElement, {});
    this.addQuoteModal.show();
  }

  addNewQuote() {
    if (this.validateForm()) {
      const quote = new Quote(
        this.author,
        this.quote,
        this.createdBy,
        new Date()
      );

      this.addNewQuoteEvent.emit(quote);
      this.author = this.quote = this.createdBy = '';
      this.addQuoteModal.hide();
    } else {
      alert('Please fill all the details');
    }
  }

  validateForm() {
    return this.author && this.quote && this.createdBy;
  }
}
