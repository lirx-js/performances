import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3560693726215499',
  standalone: true,
  templateUrl: './app-3560693726215499.component.html',
  styleUrl: './app-3560693726215499.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3560693726215499Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
