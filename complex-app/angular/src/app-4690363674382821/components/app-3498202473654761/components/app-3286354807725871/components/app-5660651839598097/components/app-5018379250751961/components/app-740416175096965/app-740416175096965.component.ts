import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-740416175096965',
  standalone: true,
  templateUrl: './app-740416175096965.component.html',
  styleUrl: './app-740416175096965.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App740416175096965Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
