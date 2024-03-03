import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-636467341676713',
  standalone: true,
  templateUrl: './app-636467341676713.component.html',
  styleUrl: './app-636467341676713.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App636467341676713Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
