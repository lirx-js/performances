import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3593511627971701',
  standalone: true,
  templateUrl: './app-3593511627971701.component.html',
  styleUrl: './app-3593511627971701.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3593511627971701Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
