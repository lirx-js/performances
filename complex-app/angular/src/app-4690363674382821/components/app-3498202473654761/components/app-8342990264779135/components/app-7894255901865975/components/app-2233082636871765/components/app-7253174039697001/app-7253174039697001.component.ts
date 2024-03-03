import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7253174039697001',
  standalone: true,
  templateUrl: './app-7253174039697001.component.html',
  styleUrl: './app-7253174039697001.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7253174039697001Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
