import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3082568137650715',
  standalone: true,
  templateUrl: './app-3082568137650715.component.html',
  styleUrl: './app-3082568137650715.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3082568137650715Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
