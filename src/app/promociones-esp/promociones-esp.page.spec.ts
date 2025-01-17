import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PromocionesEspPage } from './promociones-esp.page';

describe('PromocionesEspPage', () => {
  let component: PromocionesEspPage;
  let fixture: ComponentFixture<PromocionesEspPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionesEspPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
