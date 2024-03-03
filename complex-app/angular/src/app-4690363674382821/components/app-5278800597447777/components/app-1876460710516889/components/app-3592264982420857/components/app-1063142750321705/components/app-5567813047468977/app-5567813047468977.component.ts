import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5567813047468977',
  standalone: true,
  templateUrl: './app-5567813047468977.component.html',
  styleUrl: './app-5567813047468977.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5567813047468977Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
