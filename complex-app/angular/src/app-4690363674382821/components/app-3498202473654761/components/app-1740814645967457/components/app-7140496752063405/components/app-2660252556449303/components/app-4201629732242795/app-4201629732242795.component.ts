import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4201629732242795',
  standalone: true,
  templateUrl: './app-4201629732242795.component.html',
  styleUrl: './app-4201629732242795.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4201629732242795Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
