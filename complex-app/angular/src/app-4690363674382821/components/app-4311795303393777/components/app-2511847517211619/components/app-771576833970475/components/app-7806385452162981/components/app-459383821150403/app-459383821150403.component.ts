import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-459383821150403',
  standalone: true,
  templateUrl: './app-459383821150403.component.html',
  styleUrl: './app-459383821150403.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App459383821150403Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
