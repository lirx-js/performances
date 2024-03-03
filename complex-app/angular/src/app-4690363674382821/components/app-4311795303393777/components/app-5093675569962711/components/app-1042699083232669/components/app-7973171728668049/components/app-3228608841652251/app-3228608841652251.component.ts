import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3228608841652251',
  standalone: true,
  templateUrl: './app-3228608841652251.component.html',
  styleUrl: './app-3228608841652251.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3228608841652251Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
