import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuoteModalComponent } from './add-quote-modal.component';

describe('AddQuoteModalComponent', () => {
  let component: AddQuoteModalComponent;
  let fixture: ComponentFixture<AddQuoteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQuoteModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuoteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
