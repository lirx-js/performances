import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5393316241299403',
  standalone: true,
  templateUrl: './app-5393316241299403.component.html',
  styleUrl: './app-5393316241299403.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5393316241299403Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
