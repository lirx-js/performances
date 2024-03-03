import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3080576330419699',
  standalone: true,
  templateUrl: './app-3080576330419699.component.html',
  styleUrl: './app-3080576330419699.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3080576330419699Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
