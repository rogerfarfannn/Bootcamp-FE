import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsFavoritePage } from './cards-favorite-page';

describe('CardsFavoritePage', () => {
  let component: CardsFavoritePage;
  let fixture: ComponentFixture<CardsFavoritePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsFavoritePage],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsFavoritePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
