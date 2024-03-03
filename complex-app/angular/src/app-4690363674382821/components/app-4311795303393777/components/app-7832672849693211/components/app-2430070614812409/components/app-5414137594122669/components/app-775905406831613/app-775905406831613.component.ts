import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-775905406831613',
  standalone: true,
  templateUrl: './app-775905406831613.component.html',
  styleUrl: './app-775905406831613.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App775905406831613Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
