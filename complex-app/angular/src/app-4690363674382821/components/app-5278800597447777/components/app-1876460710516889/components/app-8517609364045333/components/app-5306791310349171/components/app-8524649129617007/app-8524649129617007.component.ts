import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8524649129617007',
  standalone: true,
  templateUrl: './app-8524649129617007.component.html',
  styleUrl: './app-8524649129617007.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8524649129617007Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
