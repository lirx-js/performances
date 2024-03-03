import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6511715253211537',
  standalone: true,
  templateUrl: './app-6511715253211537.component.html',
  styleUrl: './app-6511715253211537.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6511715253211537Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
