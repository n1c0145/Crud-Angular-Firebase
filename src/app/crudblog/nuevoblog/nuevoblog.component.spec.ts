import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoblogComponent } from './nuevoblog.component';

describe('NuevoblogComponent', () => {
  let component: NuevoblogComponent;
  let fixture: ComponentFixture<NuevoblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
