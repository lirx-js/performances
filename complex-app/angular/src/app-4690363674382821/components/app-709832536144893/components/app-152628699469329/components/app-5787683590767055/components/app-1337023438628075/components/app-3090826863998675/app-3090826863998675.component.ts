import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3090826863998675',
  standalone: true,
  templateUrl: './app-3090826863998675.component.html',
  styleUrl: './app-3090826863998675.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3090826863998675Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
