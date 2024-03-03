import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2858776327921519',
  standalone: true,
  templateUrl: './app-2858776327921519.component.html',
  styleUrl: './app-2858776327921519.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2858776327921519Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
