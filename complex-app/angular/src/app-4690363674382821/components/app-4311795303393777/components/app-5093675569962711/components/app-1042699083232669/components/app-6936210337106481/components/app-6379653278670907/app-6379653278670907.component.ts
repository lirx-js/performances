import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6379653278670907',
  standalone: true,
  templateUrl: './app-6379653278670907.component.html',
  styleUrl: './app-6379653278670907.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6379653278670907Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
