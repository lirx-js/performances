import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7133740565867163',
  standalone: true,
  templateUrl: './app-7133740565867163.component.html',
  styleUrl: './app-7133740565867163.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7133740565867163Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
