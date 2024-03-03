import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5333656690446007',
  standalone: true,
  templateUrl: './app-5333656690446007.component.html',
  styleUrl: './app-5333656690446007.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5333656690446007Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
