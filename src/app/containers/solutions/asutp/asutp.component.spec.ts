import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsutpComponent } from './asutp.component';

describe('AsutpComponent', () => {
  let component: AsutpComponent;
  let fixture: ComponentFixture<AsutpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsutpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsutpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
