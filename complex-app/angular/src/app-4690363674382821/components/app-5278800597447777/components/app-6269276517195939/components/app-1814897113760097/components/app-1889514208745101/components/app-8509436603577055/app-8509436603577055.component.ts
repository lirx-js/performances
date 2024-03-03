import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8509436603577055',
  standalone: true,
  templateUrl: './app-8509436603577055.component.html',
  styleUrl: './app-8509436603577055.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8509436603577055Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
