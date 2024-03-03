import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2464884787590647',
  standalone: true,
  templateUrl: './app-2464884787590647.component.html',
  styleUrl: './app-2464884787590647.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2464884787590647Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
