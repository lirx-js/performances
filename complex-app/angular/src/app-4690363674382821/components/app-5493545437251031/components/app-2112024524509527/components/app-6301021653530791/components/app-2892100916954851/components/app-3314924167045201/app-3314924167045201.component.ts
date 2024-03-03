import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3314924167045201',
  standalone: true,
  templateUrl: './app-3314924167045201.component.html',
  styleUrl: './app-3314924167045201.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3314924167045201Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
