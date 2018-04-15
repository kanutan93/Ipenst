import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessFormComponent } from './sucess-form.component';

describe('SucessFormComponent', () => {
  let component: SucessFormComponent;
  let fixture: ComponentFixture<SucessFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucessFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
