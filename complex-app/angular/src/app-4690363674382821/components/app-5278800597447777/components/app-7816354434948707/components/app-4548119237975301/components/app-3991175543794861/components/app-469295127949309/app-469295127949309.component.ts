import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-469295127949309',
  standalone: true,
  templateUrl: './app-469295127949309.component.html',
  styleUrl: './app-469295127949309.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App469295127949309Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
