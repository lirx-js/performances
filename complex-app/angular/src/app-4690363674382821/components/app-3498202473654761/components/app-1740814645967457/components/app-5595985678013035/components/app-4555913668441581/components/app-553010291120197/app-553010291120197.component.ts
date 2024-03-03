import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-553010291120197',
  standalone: true,
  templateUrl: './app-553010291120197.component.html',
  styleUrl: './app-553010291120197.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App553010291120197Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
