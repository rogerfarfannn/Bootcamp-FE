import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCombat } from './card-combat';

describe('CardCombat', () => {
  let component: CardCombat;
  let fixture: ComponentFixture<CardCombat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCombat],
    }).compileComponents();

    fixture = TestBed.createComponent(CardCombat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
