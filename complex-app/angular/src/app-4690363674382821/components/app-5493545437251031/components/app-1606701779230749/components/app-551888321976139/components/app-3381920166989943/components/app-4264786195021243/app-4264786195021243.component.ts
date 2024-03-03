import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4264786195021243',
  standalone: true,
  templateUrl: './app-4264786195021243.component.html',
  styleUrl: './app-4264786195021243.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4264786195021243Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
