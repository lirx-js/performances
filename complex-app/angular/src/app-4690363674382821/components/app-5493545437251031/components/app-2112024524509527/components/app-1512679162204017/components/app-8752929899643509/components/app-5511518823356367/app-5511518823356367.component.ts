import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5511518823356367',
  standalone: true,
  templateUrl: './app-5511518823356367.component.html',
  styleUrl: './app-5511518823356367.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5511518823356367Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
