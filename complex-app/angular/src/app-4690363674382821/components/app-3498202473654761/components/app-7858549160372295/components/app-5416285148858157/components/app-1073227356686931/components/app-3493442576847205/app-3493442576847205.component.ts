import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3493442576847205',
  standalone: true,
  templateUrl: './app-3493442576847205.component.html',
  styleUrl: './app-3493442576847205.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3493442576847205Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
