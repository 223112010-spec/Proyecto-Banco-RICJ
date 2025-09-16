import { Routes } from '@angular/router';
import { LoginUsComponent } from './login-us/login-us';
import { SolicitudComponent } from './solicitud/solicitud';
import { GerenteComponent } from './gerente/gerente';
import { RegistroComponent } from './registro/registro';
import { TycComponent } from './ty-c/ty-c';



export const routes: Routes = [
 // Rutas de componentes
  { path: 'login-us', component: LoginUsComponent },
  { path: 'solicitud', component: SolicitudComponent },
  { path: 'gerente', component: GerenteComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'terYcon', component: TycComponent },
  
  // Rutas de redirección
  // Ruta por defecto que redirige al login
  { path: '', redirectTo: 'login-us', pathMatch: 'full' },
  
  // Ruta comodín para URLs no encontradas
  { path: '**', redirectTo: 'login-us' }
];