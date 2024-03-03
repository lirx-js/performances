import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6791771176105157',
  standalone: true,
  templateUrl: './app-6791771176105157.component.html',
  styleUrl: './app-6791771176105157.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6791771176105157Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
