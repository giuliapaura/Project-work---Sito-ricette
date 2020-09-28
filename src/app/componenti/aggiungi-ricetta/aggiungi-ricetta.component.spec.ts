import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiRicettaComponent } from './aggiungi-ricetta.component';

describe('AggiungiRicettaComponent', () => {
  let component: AggiungiRicettaComponent;
  let fixture: ComponentFixture<AggiungiRicettaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggiungiRicettaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiungiRicettaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
