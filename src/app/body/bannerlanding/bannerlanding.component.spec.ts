import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerlandingComponent } from './bannerlanding.component';

describe('BannerlandingComponent', () => {
  let component: BannerlandingComponent;
  let fixture: ComponentFixture<BannerlandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerlandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
