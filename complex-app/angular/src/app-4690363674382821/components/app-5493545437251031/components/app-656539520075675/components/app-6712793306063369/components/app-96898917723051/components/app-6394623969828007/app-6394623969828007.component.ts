import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6394623969828007',
  standalone: true,
  templateUrl: './app-6394623969828007.component.html',
  styleUrl: './app-6394623969828007.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6394623969828007Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
