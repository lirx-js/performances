import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1818039824671099',
  standalone: true,
  templateUrl: './app-1818039824671099.component.html',
  styleUrl: './app-1818039824671099.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1818039824671099Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
