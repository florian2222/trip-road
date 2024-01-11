import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilmodalPage } from './profilmodal.page';

describe('ProfilmodalPage', () => {
  let component: ProfilmodalPage;
  let fixture: ComponentFixture<ProfilmodalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfilmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
