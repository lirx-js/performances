import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4573503137132499',
  standalone: true,
  templateUrl: './app-4573503137132499.component.html',
  styleUrl: './app-4573503137132499.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4573503137132499Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
