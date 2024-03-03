import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3602730017123103',
  standalone: true,
  templateUrl: './app-3602730017123103.component.html',
  styleUrl: './app-3602730017123103.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3602730017123103Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
