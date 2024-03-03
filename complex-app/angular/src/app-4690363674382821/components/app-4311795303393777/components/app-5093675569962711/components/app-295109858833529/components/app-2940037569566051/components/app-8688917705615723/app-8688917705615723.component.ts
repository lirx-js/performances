import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8688917705615723',
  standalone: true,
  templateUrl: './app-8688917705615723.component.html',
  styleUrl: './app-8688917705615723.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8688917705615723Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
