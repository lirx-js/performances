import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4613656634444877',
  standalone: true,
  templateUrl: './app-4613656634444877.component.html',
  styleUrl: './app-4613656634444877.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4613656634444877Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
