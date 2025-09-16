import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-us',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login-us.html',
  styleUrls: ['./login-us.css'],
})
export class LoginUsComponent implements OnInit {
  // Propiedades para vincular con el formulario
  username = '';
  password = '';
  rememberMe = false;

  // Propiedad para controlar el estado del menú
  isMenuOpen = false;

  constructor() {}

  ngOnInit(): void {
    // Escuchar clics en el documento para cerrar el menú
    document.addEventListener('click', this.onDocumentClick.bind(this));
    // Escuchar la tecla 'Escape' para cerrar el menú
    document.addEventListener('keydown', this.onEscapeKey.bind(this));
  }

  // Método para manejar el envío del formulario
  onSubmit(): void {
    console.log('Formulario enviado:', {
      username: this.username,
      password: this.password,
      rememberMe: this.rememberMe,
    });
    // Aquí es donde harías la llamada a tu servicio de autenticación
  }

  // Método para alternar el estado del menú
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Método para manejar los clics en los elementos del menú
  showAlert(item: string): void {
    alert(`Seleccionaste: ${item}`);
    this.isMenuOpen = false; // Cierra el menú después de la selección
  }

  // Método para manejar clics fuera del menú
  onDocumentClick(event: Event): void {
    const menuTrigger = document.getElementById('menuTrigger');
    const dropdownMenu = document.getElementById('dropdownMenu');
    if (
      menuTrigger &&
      dropdownMenu &&
      !menuTrigger.contains(event.target as Node) &&
      !dropdownMenu.contains(event.target as Node)
    ) {
      this.isMenuOpen = false;
    }
  }

  // Método para manejar la tecla 'Escape'
  onEscapeKey(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.isMenuOpen = false;
    }
  }
}