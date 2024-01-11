import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeQrPage } from './code-qr.page';

describe('CodeQrPage', () => {
  let component: CodeQrPage;
  let fixture: ComponentFixture<CodeQrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CodeQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
