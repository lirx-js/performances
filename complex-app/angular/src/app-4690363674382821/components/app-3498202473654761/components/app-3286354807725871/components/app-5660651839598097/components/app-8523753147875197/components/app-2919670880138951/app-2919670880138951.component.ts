import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2919670880138951',
  standalone: true,
  templateUrl: './app-2919670880138951.component.html',
  styleUrl: './app-2919670880138951.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2919670880138951Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
