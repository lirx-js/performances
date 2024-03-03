import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4527287135201983',
  standalone: true,
  templateUrl: './app-4527287135201983.component.html',
  styleUrl: './app-4527287135201983.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4527287135201983Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
