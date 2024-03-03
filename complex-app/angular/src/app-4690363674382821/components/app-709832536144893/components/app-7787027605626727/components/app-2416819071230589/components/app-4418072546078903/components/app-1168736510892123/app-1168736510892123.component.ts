import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1168736510892123',
  standalone: true,
  templateUrl: './app-1168736510892123.component.html',
  styleUrl: './app-1168736510892123.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1168736510892123Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
