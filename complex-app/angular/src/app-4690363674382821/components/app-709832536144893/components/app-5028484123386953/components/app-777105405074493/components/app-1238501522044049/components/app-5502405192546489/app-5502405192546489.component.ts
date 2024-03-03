import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5502405192546489',
  standalone: true,
  templateUrl: './app-5502405192546489.component.html',
  styleUrl: './app-5502405192546489.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5502405192546489Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
