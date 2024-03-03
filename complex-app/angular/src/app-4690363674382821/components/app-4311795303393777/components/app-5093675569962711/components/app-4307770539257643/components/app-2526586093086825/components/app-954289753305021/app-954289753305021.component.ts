import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-954289753305021',
  standalone: true,
  templateUrl: './app-954289753305021.component.html',
  styleUrl: './app-954289753305021.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App954289753305021Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
