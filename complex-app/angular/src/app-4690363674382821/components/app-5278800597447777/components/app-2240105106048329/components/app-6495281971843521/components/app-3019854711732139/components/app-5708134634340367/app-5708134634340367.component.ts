import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5708134634340367',
  standalone: true,
  templateUrl: './app-5708134634340367.component.html',
  styleUrl: './app-5708134634340367.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5708134634340367Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
