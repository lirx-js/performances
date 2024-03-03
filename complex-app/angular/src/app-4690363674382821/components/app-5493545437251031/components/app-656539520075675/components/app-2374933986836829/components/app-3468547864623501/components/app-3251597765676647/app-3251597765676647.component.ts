import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3251597765676647',
  standalone: true,
  templateUrl: './app-3251597765676647.component.html',
  styleUrl: './app-3251597765676647.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3251597765676647Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
