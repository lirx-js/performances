import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7185793083959301',
  standalone: true,
  templateUrl: './app-7185793083959301.component.html',
  styleUrl: './app-7185793083959301.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7185793083959301Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
