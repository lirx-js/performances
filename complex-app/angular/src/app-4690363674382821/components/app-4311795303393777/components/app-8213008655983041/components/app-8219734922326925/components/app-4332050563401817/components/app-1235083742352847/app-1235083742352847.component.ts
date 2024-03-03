import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1235083742352847',
  standalone: true,
  templateUrl: './app-1235083742352847.component.html',
  styleUrl: './app-1235083742352847.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1235083742352847Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
