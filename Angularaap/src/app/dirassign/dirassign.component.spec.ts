import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirassignComponent } from './dirassign.component';

describe('DirassignComponent', () => {
  let component: DirassignComponent;
  let fixture: ComponentFixture<DirassignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirassignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
