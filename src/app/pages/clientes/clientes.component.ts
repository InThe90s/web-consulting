import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from "../../components/footer/footer.component";
import { PhotoRollSliderComponent } from '../../components/photo-roll-slider/photo-roll-slider.component';  

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, PhotoRollSliderComponent],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {

}
