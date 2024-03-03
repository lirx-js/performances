import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5820439454712417',
  standalone: true,
  templateUrl: './app-5820439454712417.component.html',
  styleUrl: './app-5820439454712417.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5820439454712417Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
