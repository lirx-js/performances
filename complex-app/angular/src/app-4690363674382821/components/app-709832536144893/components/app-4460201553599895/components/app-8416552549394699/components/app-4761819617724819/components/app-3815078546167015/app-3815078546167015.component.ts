import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3815078546167015',
  standalone: true,
  templateUrl: './app-3815078546167015.component.html',
  styleUrl: './app-3815078546167015.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3815078546167015Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
