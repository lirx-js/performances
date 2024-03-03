import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4176431204742997',
  standalone: true,
  templateUrl: './app-4176431204742997.component.html',
  styleUrl: './app-4176431204742997.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4176431204742997Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
