import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-340667122821243',
  standalone: true,
  templateUrl: './app-340667122821243.component.html',
  styleUrl: './app-340667122821243.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App340667122821243Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
