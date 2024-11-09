import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoRollSliderComponent } from './photo-roll-slider.component';

describe('PhotoRollSliderComponent', () => {
  let component: PhotoRollSliderComponent;
  let fixture: ComponentFixture<PhotoRollSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoRollSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoRollSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
