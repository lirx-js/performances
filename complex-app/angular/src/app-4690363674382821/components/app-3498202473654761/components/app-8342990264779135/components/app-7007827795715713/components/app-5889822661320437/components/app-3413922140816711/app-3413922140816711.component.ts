import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3413922140816711',
  standalone: true,
  templateUrl: './app-3413922140816711.component.html',
  styleUrl: './app-3413922140816711.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3413922140816711Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
