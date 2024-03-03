import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2153302825002699',
  standalone: true,
  templateUrl: './app-2153302825002699.component.html',
  styleUrl: './app-2153302825002699.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2153302825002699Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
