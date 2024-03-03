import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2427863781323057',
  standalone: true,
  templateUrl: './app-2427863781323057.component.html',
  styleUrl: './app-2427863781323057.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2427863781323057Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
