import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2834794425389371',
  standalone: true,
  templateUrl: './app-2834794425389371.component.html',
  styleUrl: './app-2834794425389371.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2834794425389371Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
