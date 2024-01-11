import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailmodalPage } from './detailmodal.page';

describe('DetailmodalPage', () => {
  let component: DetailmodalPage;
  let fixture: ComponentFixture<DetailmodalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
