import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabchauffeurPage } from './tabchauffeur.page';

describe('TabchauffeurPage', () => {
  let component: TabchauffeurPage;
  let fixture: ComponentFixture<TabchauffeurPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabchauffeurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
