import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4611539082329977',
  standalone: true,
  templateUrl: './app-4611539082329977.component.html',
  styleUrl: './app-4611539082329977.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4611539082329977Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
