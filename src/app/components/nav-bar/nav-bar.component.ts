import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroBars3Solid, heroXMarkSolid } from '@ng-icons/heroicons/solid'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, CommonModule, NgIconComponent],
  providers: [provideIcons({heroBars3Solid, heroXMarkSolid})],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  isMenuOpen: boolean = false;

  onToggleMenu(): void{
    this.isMenuOpen = !this.isMenuOpen;
    console.log('isMenuOpen:', this.isMenuOpen);
    }

    get currentIcon(): string {
      return this.isMenuOpen ? 'heroXMarkSolid' : 'heroBars3Solid';
    }
  }


