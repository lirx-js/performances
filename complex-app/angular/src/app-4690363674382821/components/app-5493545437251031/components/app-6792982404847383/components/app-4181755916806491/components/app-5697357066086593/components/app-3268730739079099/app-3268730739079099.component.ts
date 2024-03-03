import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3268730739079099',
  standalone: true,
  templateUrl: './app-3268730739079099.component.html',
  styleUrl: './app-3268730739079099.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3268730739079099Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
