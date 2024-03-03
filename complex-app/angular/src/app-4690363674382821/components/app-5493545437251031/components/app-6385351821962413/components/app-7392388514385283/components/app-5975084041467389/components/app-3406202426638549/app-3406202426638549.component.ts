import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3406202426638549',
  standalone: true,
  templateUrl: './app-3406202426638549.component.html',
  styleUrl: './app-3406202426638549.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3406202426638549Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
