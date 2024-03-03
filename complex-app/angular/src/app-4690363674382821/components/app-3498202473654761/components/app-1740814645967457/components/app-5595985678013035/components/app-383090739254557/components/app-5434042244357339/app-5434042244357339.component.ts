import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5434042244357339',
  standalone: true,
  templateUrl: './app-5434042244357339.component.html',
  styleUrl: './app-5434042244357339.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5434042244357339Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
