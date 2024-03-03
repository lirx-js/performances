import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8670799543442083',
  standalone: true,
  templateUrl: './app-8670799543442083.component.html',
  styleUrl: './app-8670799543442083.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8670799543442083Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
