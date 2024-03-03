import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2735487372242567',
  standalone: true,
  templateUrl: './app-2735487372242567.component.html',
  styleUrl: './app-2735487372242567.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2735487372242567Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
