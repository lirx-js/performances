import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5428033142569333',
  standalone: true,
  templateUrl: './app-5428033142569333.component.html',
  styleUrl: './app-5428033142569333.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5428033142569333Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
