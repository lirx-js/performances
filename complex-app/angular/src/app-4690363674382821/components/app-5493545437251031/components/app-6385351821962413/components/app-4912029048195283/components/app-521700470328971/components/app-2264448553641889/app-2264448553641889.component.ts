import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2264448553641889',
  standalone: true,
  templateUrl: './app-2264448553641889.component.html',
  styleUrl: './app-2264448553641889.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2264448553641889Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
