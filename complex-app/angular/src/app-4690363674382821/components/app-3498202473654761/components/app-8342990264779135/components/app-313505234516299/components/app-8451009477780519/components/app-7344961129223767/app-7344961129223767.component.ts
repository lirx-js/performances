import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7344961129223767',
  standalone: true,
  templateUrl: './app-7344961129223767.component.html',
  styleUrl: './app-7344961129223767.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7344961129223767Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
