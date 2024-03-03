import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7557830954041137',
  standalone: true,
  templateUrl: './app-7557830954041137.component.html',
  styleUrl: './app-7557830954041137.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7557830954041137Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
