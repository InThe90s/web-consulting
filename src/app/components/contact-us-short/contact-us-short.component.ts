import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroDevicePhoneMobileSolid, heroEnvelopeSolid, heroMapPinSolid, heroPaperAirplaneSolid } from '@ng-icons/heroicons/solid'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us-short',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  providers: [provideIcons({heroDevicePhoneMobileSolid, heroEnvelopeSolid, heroMapPinSolid, heroPaperAirplaneSolid})],
  templateUrl: './contact-us-short.component.html',
  styleUrl: './contact-us-short.component.css'
})
export class ContactUsShortComponent {

}
