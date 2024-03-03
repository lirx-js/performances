import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7519454650545667',
  standalone: true,
  templateUrl: './app-7519454650545667.component.html',
  styleUrl: './app-7519454650545667.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7519454650545667Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
