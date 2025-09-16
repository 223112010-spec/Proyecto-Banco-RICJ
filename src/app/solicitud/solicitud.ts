import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-solicitud',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './solicitud.html',
  styleUrls: ['./solicitud.css']
})
export class SolicitudComponent implements OnInit {

  // Propiedades para vincular con el formulario
  nombreCompleto = '';
  numeroIdentificacion = '';
  curp = '';
  telefono = '';
  correo = '';
  tipoTarjeta = 'credito'; // Valor por defecto
  ingresos = '';
  historialCrediticio = 'si'; // Valor por defecto
  tipoCuenta = '';

  // Inyectamos el servicio Router en el constructor
  constructor(private router: Router) { }

  ngOnInit(): void {
    // Aquí puedes inicializar propiedades si es necesario
  }
  
  // Getter para habilitar o deshabilitar el botón "Continuar"
  get formularioValido(): boolean {
    return !!(this.nombreCompleto && this.numeroIdentificacion && this.curp && this.telefono && this.correo && this.ingresos && this.tipoCuenta);
  }

  // Método que se ejecutará al hacer clic en "Continuar"
  enviarFormulario(): void {
    console.log('Formulario de solicitud enviado:', {
      nombreCompleto: this.nombreCompleto,
      numeroIdentificacion: this.numeroIdentificacion,
      curp: this.curp,
      telefono: this.telefono,
      correo: this.correo,
      tipoTarjeta: this.tipoTarjeta,
      ingresos: this.ingresos,
      historialCrediticio: this.historialCrediticio,
      tipoCuenta: this.tipoCuenta
    });
    alert('¡Tu solicitud ha sido enviada con éxito!');
    
    // Redirigir a otra página después del envío exitoso
    this.router.navigate(['/confirmacion']); // O la ruta que desees
  }
  
  // Método para el botón "Cancelar"
  cancelar(): void {
    const confirmar = confirm('¿Estás seguro de que deseas cancelar? Se perderán los datos ingresados.');
    if (confirmar) {
      this.router.navigate(['/login-us']);
    }
  }

}