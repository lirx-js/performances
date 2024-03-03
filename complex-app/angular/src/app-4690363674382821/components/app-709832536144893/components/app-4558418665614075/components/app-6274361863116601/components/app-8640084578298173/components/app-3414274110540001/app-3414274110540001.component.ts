import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3414274110540001',
  standalone: true,
  templateUrl: './app-3414274110540001.component.html',
  styleUrl: './app-3414274110540001.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3414274110540001Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
