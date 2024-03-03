import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8358714142115925',
  standalone: true,
  templateUrl: './app-8358714142115925.component.html',
  styleUrl: './app-8358714142115925.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8358714142115925Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
