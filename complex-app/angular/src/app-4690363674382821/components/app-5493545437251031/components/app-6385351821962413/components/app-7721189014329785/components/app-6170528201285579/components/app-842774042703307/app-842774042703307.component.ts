import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-842774042703307',
  standalone: true,
  templateUrl: './app-842774042703307.component.html',
  styleUrl: './app-842774042703307.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App842774042703307Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
