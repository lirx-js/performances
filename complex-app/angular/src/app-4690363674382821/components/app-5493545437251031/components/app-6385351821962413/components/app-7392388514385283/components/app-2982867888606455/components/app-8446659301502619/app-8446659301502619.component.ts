import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8446659301502619',
  standalone: true,
  templateUrl: './app-8446659301502619.component.html',
  styleUrl: './app-8446659301502619.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8446659301502619Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
