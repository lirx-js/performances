import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6314990813262757',
  standalone: true,
  templateUrl: './app-6314990813262757.component.html',
  styleUrl: './app-6314990813262757.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6314990813262757Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
