import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContaFechadaPage } from './conta-fechada.page';

describe('ContaFechadaPage', () => {
  let component: ContaFechadaPage;
  let fixture: ComponentFixture<ContaFechadaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaFechadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
