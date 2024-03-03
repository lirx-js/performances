import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-227076494519717',
  standalone: true,
  templateUrl: './app-227076494519717.component.html',
  styleUrl: './app-227076494519717.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App227076494519717Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
