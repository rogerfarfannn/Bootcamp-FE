import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailImage } from './card-detail-image';

describe('CardDetailImage', () => {
  let component: CardDetailImage;
  let fixture: ComponentFixture<CardDetailImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDetailImage],
    }).compileComponents();

    fixture = TestBed.createComponent(CardDetailImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
