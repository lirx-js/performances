import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1374871521767747',
  standalone: true,
  templateUrl: './app-1374871521767747.component.html',
  styleUrl: './app-1374871521767747.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1374871521767747Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
