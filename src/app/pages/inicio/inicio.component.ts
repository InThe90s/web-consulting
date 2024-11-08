import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from "../../components/footer/footer.component";
import { ContactUsShortComponent } from "../../components/contact-us-short/contact-us-short.component";
import { ServiceSliderComponent } from '../../components/service-slider/service-slider.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ RouterModule, NavBarComponent, FooterComponent, ContactUsShortComponent,ServiceSliderComponent, CarouselComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
