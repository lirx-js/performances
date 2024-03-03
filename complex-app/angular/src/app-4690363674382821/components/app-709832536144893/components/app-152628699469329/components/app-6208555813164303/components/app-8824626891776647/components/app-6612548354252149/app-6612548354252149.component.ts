import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6612548354252149',
  standalone: true,
  templateUrl: './app-6612548354252149.component.html',
  styleUrl: './app-6612548354252149.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6612548354252149Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
