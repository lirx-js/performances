import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3133418819810239',
  standalone: true,
  templateUrl: './app-3133418819810239.component.html',
  styleUrl: './app-3133418819810239.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3133418819810239Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
