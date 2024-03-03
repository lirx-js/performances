import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1354389108596485',
  standalone: true,
  templateUrl: './app-1354389108596485.component.html',
  styleUrl: './app-1354389108596485.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1354389108596485Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
