import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetetudiantPage } from './detetudiant.page';

describe('DetetudiantPage', () => {
  let component: DetetudiantPage;
  let fixture: ComponentFixture<DetetudiantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetetudiantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
