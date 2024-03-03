import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1565614567304965',
  standalone: true,
  templateUrl: './app-1565614567304965.component.html',
  styleUrl: './app-1565614567304965.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1565614567304965Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
