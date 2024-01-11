import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrajetStdPage } from './trajet-std.page';

describe('TrajetStdPage', () => {
  let component: TrajetStdPage;
  let fixture: ComponentFixture<TrajetStdPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrajetStdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
