import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class RegistroComponent {
  
  // Propiedades para vincular con el formulario
  nombreCompleto = '';
  telefono = '';
  correo = '';
  fechaNacimiento = '';
  terminosAceptados = false;

  // Inyectamos el servicio Router en el constructor
  constructor(private router: Router) { }

  onSubmit(): void {
    // Verificamos si los términos han sido aceptados
    if (this.terminosAceptados) {
      console.log('Formulario de registro enviado:', {
        nombreCompleto: this.nombreCompleto,
        telefono: this.telefono,
        correo: this.correo,
        fechaNacimiento: this.fechaNacimiento,
        terminosAceptados: this.terminosAceptados
      });

      alert('Formulario de registro enviado correctamente.');
      // Navegamos a la página de solicitud
      this.router.navigate(['/solicitud']);
    } else {
      alert('Debes aceptar los Términos y Condiciones.');
    }
  }

  // Método para simular la subida de documentos
  subirDocumento(tipoDocumento: string): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*,.pdf';
    input.onchange = (e) => {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        alert(`Documento "${tipoDocumento}" seleccionado.`);
      }
    };
    input.click();
  }

  // Método para abrir términos y condiciones en nueva ventana (alternativo)
  abrirTerminos(): void {
    this.router.navigate(['/tyc']);
  }
}