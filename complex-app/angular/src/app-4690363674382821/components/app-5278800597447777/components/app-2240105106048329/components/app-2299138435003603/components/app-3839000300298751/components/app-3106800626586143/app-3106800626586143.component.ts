import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3106800626586143',
  standalone: true,
  templateUrl: './app-3106800626586143.component.html',
  styleUrl: './app-3106800626586143.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3106800626586143Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
