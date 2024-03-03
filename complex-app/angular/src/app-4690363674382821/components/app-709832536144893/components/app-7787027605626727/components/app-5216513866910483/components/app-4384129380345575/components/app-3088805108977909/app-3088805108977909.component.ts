import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3088805108977909',
  standalone: true,
  templateUrl: './app-3088805108977909.component.html',
  styleUrl: './app-3088805108977909.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3088805108977909Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
