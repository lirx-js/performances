import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5430309810510317',
  standalone: true,
  templateUrl: './app-5430309810510317.component.html',
  styleUrl: './app-5430309810510317.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5430309810510317Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
