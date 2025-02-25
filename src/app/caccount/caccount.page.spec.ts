import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaccountPage } from './caccount.page';

describe('CaccountPage', () => {
  let component: CaccountPage;
  let fixture: ComponentFixture<CaccountPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CaccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
