import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5509703318170353',
  standalone: true,
  templateUrl: './app-5509703318170353.component.html',
  styleUrl: './app-5509703318170353.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5509703318170353Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
