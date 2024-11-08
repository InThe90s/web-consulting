import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from "../../components/footer/footer.component";
import { MisionVisionComponent } from '../../components/mision-vision/mision-vision.component';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, MisionVisionComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

}
