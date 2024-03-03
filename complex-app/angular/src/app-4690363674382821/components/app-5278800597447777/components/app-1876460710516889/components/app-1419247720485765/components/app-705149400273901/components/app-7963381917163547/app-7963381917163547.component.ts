import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7963381917163547',
  standalone: true,
  templateUrl: './app-7963381917163547.component.html',
  styleUrl: './app-7963381917163547.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7963381917163547Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
