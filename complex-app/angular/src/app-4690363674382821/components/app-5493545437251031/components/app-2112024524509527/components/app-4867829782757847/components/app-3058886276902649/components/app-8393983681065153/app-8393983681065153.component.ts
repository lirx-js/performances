import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8393983681065153',
  standalone: true,
  templateUrl: './app-8393983681065153.component.html',
  styleUrl: './app-8393983681065153.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8393983681065153Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
