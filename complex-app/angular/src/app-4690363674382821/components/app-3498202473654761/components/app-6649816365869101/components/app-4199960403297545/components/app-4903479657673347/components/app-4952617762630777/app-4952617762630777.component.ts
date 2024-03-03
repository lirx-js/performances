import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4952617762630777',
  standalone: true,
  templateUrl: './app-4952617762630777.component.html',
  styleUrl: './app-4952617762630777.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4952617762630777Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
