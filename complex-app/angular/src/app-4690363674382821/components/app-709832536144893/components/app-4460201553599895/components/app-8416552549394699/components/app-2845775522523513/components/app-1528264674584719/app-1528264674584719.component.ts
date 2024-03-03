import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1528264674584719',
  standalone: true,
  templateUrl: './app-1528264674584719.component.html',
  styleUrl: './app-1528264674584719.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1528264674584719Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
