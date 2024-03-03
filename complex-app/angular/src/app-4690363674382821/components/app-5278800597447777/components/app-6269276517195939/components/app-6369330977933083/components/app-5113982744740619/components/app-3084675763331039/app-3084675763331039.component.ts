import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3084675763331039',
  standalone: true,
  templateUrl: './app-3084675763331039.component.html',
  styleUrl: './app-3084675763331039.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3084675763331039Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
