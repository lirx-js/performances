import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-282514369606301',
  standalone: true,
  templateUrl: './app-282514369606301.component.html',
  styleUrl: './app-282514369606301.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App282514369606301Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
