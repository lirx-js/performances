import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3048356957043015',
  standalone: true,
  templateUrl: './app-3048356957043015.component.html',
  styleUrl: './app-3048356957043015.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3048356957043015Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
