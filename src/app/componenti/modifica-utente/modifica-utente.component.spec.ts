import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaUtenteComponent } from './modifica-utente.component';

describe('ModificaUtenteComponent', () => {
  let component: ModificaUtenteComponent;
  let fixture: ComponentFixture<ModificaUtenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaUtenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
