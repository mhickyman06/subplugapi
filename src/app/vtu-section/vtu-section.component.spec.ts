import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VtuSectionComponent } from './vtu-section.component';

describe('VtuSectionComponent', () => {
  let component: VtuSectionComponent;
  let fixture: ComponentFixture<VtuSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VtuSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VtuSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
