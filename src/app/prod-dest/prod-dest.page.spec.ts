import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdDestPage } from './prod-dest.page';

describe('ProdDestPage', () => {
  let component: ProdDestPage;
  let fixture: ComponentFixture<ProdDestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdDestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
