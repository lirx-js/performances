import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8973485015751681',
  standalone: true,
  templateUrl: './app-8973485015751681.component.html',
  styleUrl: './app-8973485015751681.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8973485015751681Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
