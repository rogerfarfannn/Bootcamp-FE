import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAccordion } from './section-accordion';

describe('SectionAccordion', () => {
  let component: SectionAccordion;
  let fixture: ComponentFixture<SectionAccordion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionAccordion],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionAccordion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
