import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6847333523219975',
  standalone: true,
  templateUrl: './app-6847333523219975.component.html',
  styleUrl: './app-6847333523219975.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6847333523219975Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
