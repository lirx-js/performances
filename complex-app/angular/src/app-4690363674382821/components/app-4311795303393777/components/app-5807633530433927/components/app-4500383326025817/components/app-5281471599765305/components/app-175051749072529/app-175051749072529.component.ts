import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-175051749072529',
  standalone: true,
  templateUrl: './app-175051749072529.component.html',
  styleUrl: './app-175051749072529.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App175051749072529Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
