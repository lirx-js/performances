import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7655333639761813',
  standalone: true,
  templateUrl: './app-7655333639761813.component.html',
  styleUrl: './app-7655333639761813.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7655333639761813Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
