import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3408575473705615',
  standalone: true,
  templateUrl: './app-3408575473705615.component.html',
  styleUrl: './app-3408575473705615.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3408575473705615Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
