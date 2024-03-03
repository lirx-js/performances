import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5550068389123997',
  standalone: true,
  templateUrl: './app-5550068389123997.component.html',
  styleUrl: './app-5550068389123997.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5550068389123997Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
