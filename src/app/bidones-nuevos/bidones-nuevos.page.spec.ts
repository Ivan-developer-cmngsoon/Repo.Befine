import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BidonesNuevosPage } from './bidones-nuevos.page';

describe('BidonesNuevosPage', () => {
  let component: BidonesNuevosPage;
  let fixture: ComponentFixture<BidonesNuevosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BidonesNuevosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
