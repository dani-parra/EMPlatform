import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanStructureComponent } from './clean-structure.component';

describe('CleanStructureComponent', () => {
  let component: CleanStructureComponent;
  let fixture: ComponentFixture<CleanStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
