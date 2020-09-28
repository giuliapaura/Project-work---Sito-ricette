import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioRicettaComponent } from './dettaglio-ricetta.component';

describe('DettaglioRicettaComponent', () => {
  let component: DettaglioRicettaComponent;
  let fixture: ComponentFixture<DettaglioRicettaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioRicettaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioRicettaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
