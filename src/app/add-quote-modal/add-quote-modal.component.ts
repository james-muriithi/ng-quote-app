import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { Modal } from 'bootstrap';
import { Quote } from 'src/shared/quote.model';

@Component({
  selector: 'app-add-quote-modal',
  templateUrl: './add-quote-modal.component.html',
  styleUrls: ['./add-quote-modal.component.scss'],
})
export class AddQuoteModalComponent implements OnInit {
  @ViewChild('addQuoteModalElement') addQuoteModalElement!: ElementRef;

  author!: string;
  quote!: string;
  createdBy!: string;

  addQuoteModal: any;
  @Output() addNewQuoteEvent = new EventEmitter<Quote>();
  @Output() modalClosed = new EventEmitter();

  @Input() open: Boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.addQuoteModal = new Modal(this.addQuoteModalElement.nativeElement, {});
    this.addQuoteModalElement.nativeElement.addEventListener('hidden.bs.modal', () => {
      this.modalClosed.emit();
    })

  }

  ngOnChanges(){
    if (this.open) {
      this.openModal();
    }
  }

  // ngOnDestroy(){
  //   this.addQuoteModalElement.nativeElement.removeEventListener('hidden.bs.modal');
  // }

  openModal() {
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
      this.scrollTo('#quotes-section');
    } else {
      alert('Please fill all the details');
    }
  }

  validateForm() {
    return this.author && this.quote && this.createdBy;
  }

  scrollTo(ref: string): void {
    const elementList = document.querySelectorAll(ref);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
