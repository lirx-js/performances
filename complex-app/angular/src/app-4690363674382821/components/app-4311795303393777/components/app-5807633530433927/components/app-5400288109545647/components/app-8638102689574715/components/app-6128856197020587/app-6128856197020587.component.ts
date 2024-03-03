import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6128856197020587',
  standalone: true,
  templateUrl: './app-6128856197020587.component.html',
  styleUrl: './app-6128856197020587.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6128856197020587Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
