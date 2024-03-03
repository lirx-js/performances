import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2543440918283043',
  standalone: true,
  templateUrl: './app-2543440918283043.component.html',
  styleUrl: './app-2543440918283043.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2543440918283043Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
