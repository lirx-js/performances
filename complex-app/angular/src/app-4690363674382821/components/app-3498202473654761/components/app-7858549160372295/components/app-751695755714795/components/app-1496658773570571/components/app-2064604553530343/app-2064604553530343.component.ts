import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2064604553530343',
  standalone: true,
  templateUrl: './app-2064604553530343.component.html',
  styleUrl: './app-2064604553530343.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2064604553530343Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
