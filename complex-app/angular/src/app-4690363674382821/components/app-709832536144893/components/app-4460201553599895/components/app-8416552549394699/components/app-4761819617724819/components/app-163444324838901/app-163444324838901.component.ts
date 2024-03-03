import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-163444324838901',
  standalone: true,
  templateUrl: './app-163444324838901.component.html',
  styleUrl: './app-163444324838901.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App163444324838901Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
