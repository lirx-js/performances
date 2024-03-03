import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-766989987662803',
  standalone: true,
  templateUrl: './app-766989987662803.component.html',
  styleUrl: './app-766989987662803.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App766989987662803Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
