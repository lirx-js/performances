import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8821280849932049',
  standalone: true,
  templateUrl: './app-8821280849932049.component.html',
  styleUrl: './app-8821280849932049.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8821280849932049Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
