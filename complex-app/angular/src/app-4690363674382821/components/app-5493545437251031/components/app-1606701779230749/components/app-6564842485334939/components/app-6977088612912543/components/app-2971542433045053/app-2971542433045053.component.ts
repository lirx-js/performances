import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2971542433045053',
  standalone: true,
  templateUrl: './app-2971542433045053.component.html',
  styleUrl: './app-2971542433045053.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2971542433045053Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
