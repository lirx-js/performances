import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4060977713840637',
  standalone: true,
  templateUrl: './app-4060977713840637.component.html',
  styleUrl: './app-4060977713840637.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4060977713840637Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
