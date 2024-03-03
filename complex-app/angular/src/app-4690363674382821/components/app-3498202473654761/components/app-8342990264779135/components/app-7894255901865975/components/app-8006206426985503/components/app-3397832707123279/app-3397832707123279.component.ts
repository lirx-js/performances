import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3397832707123279',
  standalone: true,
  templateUrl: './app-3397832707123279.component.html',
  styleUrl: './app-3397832707123279.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3397832707123279Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
