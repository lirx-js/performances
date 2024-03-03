import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4164960621882147',
  standalone: true,
  templateUrl: './app-4164960621882147.component.html',
  styleUrl: './app-4164960621882147.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4164960621882147Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
