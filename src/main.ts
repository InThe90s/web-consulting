import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { InicioComponent } from './app/pages/inicio/inicio.component';
import { NosotrosComponent } from './app/pages/nosotros/nosotros.component';
import { ServiciosComponent } from './app/pages/servicios/servicios.component';
import { ClientesComponent } from './app/pages/clientes/clientes.component';
import { CotizacionComponent } from './app/pages/cotizacion/cotizacion.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'inicio', component: InicioComponent }, // Ruta principal
      { path: 'nosotros', component: NosotrosComponent},
      { path: 'servicios', component: ServiciosComponent},
      { path: 'clientes', component: ClientesComponent},
      { path: 'cotizacion', component: CotizacionComponent},
      { path: '**', redirectTo: '/inicio', pathMatch:'full' } // Redirección a Inicio para rutas no encontradas
    ])
  ]
});
