import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightQuote]',
})
export class HighlightQuoteDirective {
  @Input() appHighlightQuote: Boolean = false;

  constructor(public el: ElementRef) {}
  ngAfterViewInit() {
    this.highlight();
  }

  ngOnChanges() {
    this.highlight();
  }
  private highlight() {
    const highlightRibbon = this.el.nativeElement.querySelector('.highlight');
    if (!!highlightRibbon) {
      this.appHighlightQuote
        ? (highlightRibbon.style.display = 'block')
        : (highlightRibbon.style.display = 'none');
    }
  }
}
