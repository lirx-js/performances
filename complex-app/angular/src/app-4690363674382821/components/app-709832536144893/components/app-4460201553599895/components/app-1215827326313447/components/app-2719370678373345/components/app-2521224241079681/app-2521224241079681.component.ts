import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2521224241079681',
  standalone: true,
  templateUrl: './app-2521224241079681.component.html',
  styleUrl: './app-2521224241079681.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2521224241079681Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
