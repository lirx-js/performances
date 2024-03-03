import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6709966285533377',
  standalone: true,
  templateUrl: './app-6709966285533377.component.html',
  styleUrl: './app-6709966285533377.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6709966285533377Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
