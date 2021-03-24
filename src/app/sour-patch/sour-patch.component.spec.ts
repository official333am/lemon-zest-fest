import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourPatchComponent } from './sour-patch.component';

describe('SourPatchComponent', () => {
  let component: SourPatchComponent;
  let fixture: ComponentFixture<SourPatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourPatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourPatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
