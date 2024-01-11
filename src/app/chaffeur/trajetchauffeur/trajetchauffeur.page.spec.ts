import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrajetchauffeurPage } from './trajetchauffeur.page';

describe('TrajetchauffeurPage', () => {
  let component: TrajetchauffeurPage;
  let fixture: ComponentFixture<TrajetchauffeurPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrajetchauffeurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
