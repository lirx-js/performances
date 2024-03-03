import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1434713923398133',
  standalone: true,
  templateUrl: './app-1434713923398133.component.html',
  styleUrl: './app-1434713923398133.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1434713923398133Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
