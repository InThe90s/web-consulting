import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from "../../components/footer/footer.component";
import { CardServiceComponent } from '../../components/card-service/card-service.component';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, CardServiceComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

}
