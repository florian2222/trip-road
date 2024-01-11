import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomechauffeurPage } from './homechauffeur.page';

describe('HomechauffeurPage', () => {
  let component: HomechauffeurPage;
  let fixture: ComponentFixture<HomechauffeurPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomechauffeurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
