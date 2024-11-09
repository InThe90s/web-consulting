import { Component } from '@angular/core';

@Component({
  selector: 'app-photo-roll-slider',
  standalone: true,
  imports: [],
  templateUrl: './photo-roll-slider.component.html',
  styleUrl: './photo-roll-slider.component.css'
})
export class PhotoRollSliderComponent {

  scrollLeft(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollBy({ left: -200, behavior: 'smooth' });
    }
  }

  scrollRight(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollBy({ left: 200, behavior: 'smooth' });
    }
  }

}
