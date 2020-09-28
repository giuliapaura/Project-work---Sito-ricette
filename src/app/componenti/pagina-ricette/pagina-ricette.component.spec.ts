import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRicetteComponent } from './pagina-ricette.component';

describe('PaginaRicetteComponent', () => {
  let component: PaginaRicetteComponent;
  let fixture: ComponentFixture<PaginaRicetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaRicetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaRicetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
