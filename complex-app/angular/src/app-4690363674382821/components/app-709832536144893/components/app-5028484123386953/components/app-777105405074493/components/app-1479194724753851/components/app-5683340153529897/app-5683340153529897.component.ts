import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5683340153529897',
  standalone: true,
  templateUrl: './app-5683340153529897.component.html',
  styleUrl: './app-5683340153529897.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5683340153529897Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
