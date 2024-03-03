import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3002668402795455',
  standalone: true,
  templateUrl: './app-3002668402795455.component.html',
  styleUrl: './app-3002668402795455.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3002668402795455Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
