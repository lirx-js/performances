import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7328473440386031',
  standalone: true,
  templateUrl: './app-7328473440386031.component.html',
  styleUrl: './app-7328473440386031.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7328473440386031Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
