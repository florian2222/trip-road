import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalprofilPage } from './modalprofil.page';

describe('ModalprofilPage', () => {
  let component: ModalprofilPage;
  let fixture: ComponentFixture<ModalprofilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalprofilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
