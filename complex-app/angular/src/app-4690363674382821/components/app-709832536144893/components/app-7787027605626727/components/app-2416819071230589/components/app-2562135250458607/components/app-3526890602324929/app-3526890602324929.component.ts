import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3526890602324929',
  standalone: true,
  templateUrl: './app-3526890602324929.component.html',
  styleUrl: './app-3526890602324929.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3526890602324929Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
