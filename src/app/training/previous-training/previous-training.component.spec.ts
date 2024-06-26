import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousTrainingComponent } from './previous-training.component';

describe('PreviousTrainingComponent', () => {
  let component: PreviousTrainingComponent;
  let fixture: ComponentFixture<PreviousTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreviousTrainingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
