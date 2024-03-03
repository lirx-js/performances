import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3728689864832655',
  standalone: true,
  templateUrl: './app-3728689864832655.component.html',
  styleUrl: './app-3728689864832655.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3728689864832655Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
