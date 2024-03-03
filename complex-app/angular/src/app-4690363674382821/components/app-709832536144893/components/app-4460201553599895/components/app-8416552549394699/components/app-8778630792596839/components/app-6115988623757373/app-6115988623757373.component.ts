import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6115988623757373',
  standalone: true,
  templateUrl: './app-6115988623757373.component.html',
  styleUrl: './app-6115988623757373.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6115988623757373Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
