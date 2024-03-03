import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1666618777653431',
  standalone: true,
  templateUrl: './app-1666618777653431.component.html',
  styleUrl: './app-1666618777653431.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1666618777653431Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
