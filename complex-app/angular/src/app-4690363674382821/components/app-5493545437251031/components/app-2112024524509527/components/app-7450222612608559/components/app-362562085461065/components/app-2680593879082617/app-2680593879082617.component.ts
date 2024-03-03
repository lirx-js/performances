import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2680593879082617',
  standalone: true,
  templateUrl: './app-2680593879082617.component.html',
  styleUrl: './app-2680593879082617.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2680593879082617Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
