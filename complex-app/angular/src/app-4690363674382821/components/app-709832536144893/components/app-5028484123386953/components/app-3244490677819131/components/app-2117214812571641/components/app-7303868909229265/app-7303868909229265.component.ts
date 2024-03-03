import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7303868909229265',
  standalone: true,
  templateUrl: './app-7303868909229265.component.html',
  styleUrl: './app-7303868909229265.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7303868909229265Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
