import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7165227888605383',
  standalone: true,
  templateUrl: './app-7165227888605383.component.html',
  styleUrl: './app-7165227888605383.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7165227888605383Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
