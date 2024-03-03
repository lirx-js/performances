import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8558679605484369',
  standalone: true,
  templateUrl: './app-8558679605484369.component.html',
  styleUrl: './app-8558679605484369.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8558679605484369Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
