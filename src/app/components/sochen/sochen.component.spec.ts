import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SochenComponent } from './sochen.component';

describe('SochenComponent', () => {
  let component: SochenComponent;
  let fixture: ComponentFixture<SochenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SochenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SochenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
