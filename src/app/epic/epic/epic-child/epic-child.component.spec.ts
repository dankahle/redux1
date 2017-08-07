import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicChildComponent } from './epic-child.component';

describe('EpicChildComponent', () => {
  let component: EpicChildComponent;
  let fixture: ComponentFixture<EpicChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpicChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpicChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
