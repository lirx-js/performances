import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7188339285631057',
  standalone: true,
  templateUrl: './app-7188339285631057.component.html',
  styleUrl: './app-7188339285631057.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7188339285631057Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
