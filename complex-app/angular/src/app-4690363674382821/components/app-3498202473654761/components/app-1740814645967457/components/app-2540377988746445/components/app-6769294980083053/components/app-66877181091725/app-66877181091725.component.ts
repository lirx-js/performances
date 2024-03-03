import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-66877181091725',
  standalone: true,
  templateUrl: './app-66877181091725.component.html',
  styleUrl: './app-66877181091725.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App66877181091725Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
