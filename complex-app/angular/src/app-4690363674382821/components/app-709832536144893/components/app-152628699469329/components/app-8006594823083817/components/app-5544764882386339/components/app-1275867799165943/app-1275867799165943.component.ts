import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1275867799165943',
  standalone: true,
  templateUrl: './app-1275867799165943.component.html',
  styleUrl: './app-1275867799165943.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1275867799165943Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
