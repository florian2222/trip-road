import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeStdPage } from './home-std.page';

describe('HomeStdPage', () => {
  let component: HomeStdPage;
  let fixture: ComponentFixture<HomeStdPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeStdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
