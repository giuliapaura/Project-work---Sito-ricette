import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaRicettaComponent } from './modifica-ricetta.component';

describe('ModificaRicettaComponent', () => {
  let component: ModificaRicettaComponent;
  let fixture: ComponentFixture<ModificaRicettaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaRicettaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaRicettaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
