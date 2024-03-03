import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7767043639321681',
  standalone: true,
  templateUrl: './app-7767043639321681.component.html',
  styleUrl: './app-7767043639321681.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7767043639321681Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
