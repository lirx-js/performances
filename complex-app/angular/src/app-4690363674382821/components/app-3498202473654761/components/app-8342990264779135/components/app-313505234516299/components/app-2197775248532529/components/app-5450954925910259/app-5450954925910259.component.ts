import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5450954925910259',
  standalone: true,
  templateUrl: './app-5450954925910259.component.html',
  styleUrl: './app-5450954925910259.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5450954925910259Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
