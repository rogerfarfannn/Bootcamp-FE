import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCarddetailNav } from './tab-carddetail-nav';

describe('TabCarddetailNav', () => {
  let component: TabCarddetailNav;
  let fixture: ComponentFixture<TabCarddetailNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabCarddetailNav],
    }).compileComponents();

    fixture = TestBed.createComponent(TabCarddetailNav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
