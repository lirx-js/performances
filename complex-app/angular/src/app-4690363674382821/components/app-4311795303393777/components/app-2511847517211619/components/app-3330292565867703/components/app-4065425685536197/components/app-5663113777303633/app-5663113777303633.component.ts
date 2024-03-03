import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5663113777303633',
  standalone: true,
  templateUrl: './app-5663113777303633.component.html',
  styleUrl: './app-5663113777303633.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5663113777303633Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
