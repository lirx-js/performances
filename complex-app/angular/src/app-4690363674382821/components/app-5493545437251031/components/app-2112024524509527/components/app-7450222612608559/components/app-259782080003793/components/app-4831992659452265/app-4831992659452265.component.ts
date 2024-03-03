import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4831992659452265',
  standalone: true,
  templateUrl: './app-4831992659452265.component.html',
  styleUrl: './app-4831992659452265.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4831992659452265Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
