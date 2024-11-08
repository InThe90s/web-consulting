import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroDocumentTextSolid, heroCalculatorSolid, heroCurrencyDollarSolid, heroChartBarSolid, heroScaleSolid} from '@ng-icons/heroicons/solid'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-slider',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  providers: [provideIcons({heroDocumentTextSolid, heroCalculatorSolid, heroCurrencyDollarSolid, heroChartBarSolid, heroScaleSolid})],
  templateUrl: './service-slider.component.html',
  styleUrl: './service-slider.component.css'
})
export class ServiceSliderComponent {

}
