import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2271044436795607',
  standalone: true,
  templateUrl: './app-2271044436795607.component.html',
  styleUrl: './app-2271044436795607.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2271044436795607Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
