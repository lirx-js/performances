import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3430152143499679',
  standalone: true,
  templateUrl: './app-3430152143499679.component.html',
  styleUrl: './app-3430152143499679.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3430152143499679Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
