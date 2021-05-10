import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LakoachComponent } from './lakoach.component';

describe('LakoachComponent', () => {
  let component: LakoachComponent;
  let fixture: ComponentFixture<LakoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LakoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LakoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
