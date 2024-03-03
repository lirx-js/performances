import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6248076967015463',
  standalone: true,
  templateUrl: './app-6248076967015463.component.html',
  styleUrl: './app-6248076967015463.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6248076967015463Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
