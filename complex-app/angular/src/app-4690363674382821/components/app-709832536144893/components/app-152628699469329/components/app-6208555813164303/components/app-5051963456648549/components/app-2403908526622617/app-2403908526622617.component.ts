import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2403908526622617',
  standalone: true,
  templateUrl: './app-2403908526622617.component.html',
  styleUrl: './app-2403908526622617.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2403908526622617Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
