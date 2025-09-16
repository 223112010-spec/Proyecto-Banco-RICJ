import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-ty-c',
  templateUrl: './ty-c.html',
  styleUrls: ['./ty-c.css']
})
export class TycComponent implements AfterViewInit {
  
  // Acceso al elemento HTML 'modal-content' para detectar el scroll
  @ViewChild('termsContent') termsContent!: ElementRef;

  // Propiedad para saber si el usuario ha llegado al final
  hasScrolledToEnd = false;

  constructor() { }
  
  // Este método se ejecuta cuando la vista se ha inicializado
  ngAfterViewInit(): void {
    this.checkScrollPosition();
  }

  // Método que se llama al hacer scroll
  onScroll(): void {
    this.checkScrollPosition();
  }

  // Lógica para verificar si el usuario ha llegado al final del contenido
  private checkScrollPosition(): void {
    const element = this.termsContent.nativeElement;
    // Si el usuario está cerca del final, se considera que ha leído todo
    this.hasScrolledToEnd = (element.scrollTop + element.clientHeight) >= (element.scrollHeight - 5);
  }

  // Método que se llama al hacer clic en el botón
  aceptar(): void {
    if (this.hasScrolledToEnd) {
      alert('Has aceptado los términos. ✅');
      // Aquí puedes agregar la lógica para continuar con el registro
    } else {
      alert('Has declinado los términos. ❌');
    }
  }

  // Método para el botón de regresar
  regresar(): void {
    alert('Regresar');
    // Aquí puedes usar el Router para volver a la página anterior
  }

  // Método para el botón de imprimir
  imprimir(): void {
    window.print();
  }
}