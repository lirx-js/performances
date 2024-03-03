import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8076755019264937',
  standalone: true,
  templateUrl: './app-8076755019264937.component.html',
  styleUrl: './app-8076755019264937.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8076755019264937Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
