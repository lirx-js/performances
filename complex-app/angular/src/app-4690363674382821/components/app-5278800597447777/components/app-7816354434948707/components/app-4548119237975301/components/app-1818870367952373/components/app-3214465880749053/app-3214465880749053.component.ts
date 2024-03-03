import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3214465880749053',
  standalone: true,
  templateUrl: './app-3214465880749053.component.html',
  styleUrl: './app-3214465880749053.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3214465880749053Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
