import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFilters } from './card-filters';

describe('CardFilters', () => {
  let component: CardFilters;
  let fixture: ComponentFixture<CardFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFilters],
    }).compileComponents();

    fixture = TestBed.createComponent(CardFilters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
