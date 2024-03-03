import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2460916728448633',
  standalone: true,
  templateUrl: './app-2460916728448633.component.html',
  styleUrl: './app-2460916728448633.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2460916728448633Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
