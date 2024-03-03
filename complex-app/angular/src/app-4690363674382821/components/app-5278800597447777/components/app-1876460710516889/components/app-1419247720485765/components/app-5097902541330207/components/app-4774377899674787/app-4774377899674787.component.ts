import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4774377899674787',
  standalone: true,
  templateUrl: './app-4774377899674787.component.html',
  styleUrl: './app-4774377899674787.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4774377899674787Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
