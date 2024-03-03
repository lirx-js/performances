import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7084544041265379',
  standalone: true,
  templateUrl: './app-7084544041265379.component.html',
  styleUrl: './app-7084544041265379.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7084544041265379Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
