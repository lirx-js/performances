import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6514750563101987',
  standalone: true,
  templateUrl: './app-6514750563101987.component.html',
  styleUrl: './app-6514750563101987.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6514750563101987Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
