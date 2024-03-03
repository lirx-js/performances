import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3749600152291085',
  standalone: true,
  templateUrl: './app-3749600152291085.component.html',
  styleUrl: './app-3749600152291085.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3749600152291085Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
