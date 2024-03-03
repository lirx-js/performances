import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5268897275911561',
  standalone: true,
  templateUrl: './app-5268897275911561.component.html',
  styleUrl: './app-5268897275911561.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5268897275911561Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
