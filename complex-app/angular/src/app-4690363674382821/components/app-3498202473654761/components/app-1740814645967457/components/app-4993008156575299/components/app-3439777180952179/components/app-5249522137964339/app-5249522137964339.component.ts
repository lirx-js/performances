import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5249522137964339',
  standalone: true,
  templateUrl: './app-5249522137964339.component.html',
  styleUrl: './app-5249522137964339.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5249522137964339Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
