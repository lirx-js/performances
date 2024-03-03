import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5938114842392923',
  standalone: true,
  templateUrl: './app-5938114842392923.component.html',
  styleUrl: './app-5938114842392923.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5938114842392923Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
