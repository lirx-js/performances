import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5479280078346459',
  standalone: true,
  templateUrl: './app-5479280078346459.component.html',
  styleUrl: './app-5479280078346459.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5479280078346459Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
