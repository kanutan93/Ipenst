import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationBlockComponent } from './consultation-block.component';

describe('ConsultationBlockComponent', () => {
  let component: ConsultationBlockComponent;
  let fixture: ComponentFixture<ConsultationBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
