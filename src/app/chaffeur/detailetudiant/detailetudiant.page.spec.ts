import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailetudiantPage } from './detailetudiant.page';

describe('DetailetudiantPage', () => {
  let component: DetailetudiantPage;
  let fixture: ComponentFixture<DetailetudiantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailetudiantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
