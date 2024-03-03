import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3357589712265647',
  standalone: true,
  templateUrl: './app-3357589712265647.component.html',
  styleUrl: './app-3357589712265647.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3357589712265647Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
