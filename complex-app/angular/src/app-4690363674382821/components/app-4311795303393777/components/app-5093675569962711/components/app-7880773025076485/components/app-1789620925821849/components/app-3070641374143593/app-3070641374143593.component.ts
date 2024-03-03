import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3070641374143593',
  standalone: true,
  templateUrl: './app-3070641374143593.component.html',
  styleUrl: './app-3070641374143593.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3070641374143593Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
