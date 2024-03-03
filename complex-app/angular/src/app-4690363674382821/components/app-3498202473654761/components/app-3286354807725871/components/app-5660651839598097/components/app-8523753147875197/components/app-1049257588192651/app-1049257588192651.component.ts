import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1049257588192651',
  standalone: true,
  templateUrl: './app-1049257588192651.component.html',
  styleUrl: './app-1049257588192651.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1049257588192651Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
