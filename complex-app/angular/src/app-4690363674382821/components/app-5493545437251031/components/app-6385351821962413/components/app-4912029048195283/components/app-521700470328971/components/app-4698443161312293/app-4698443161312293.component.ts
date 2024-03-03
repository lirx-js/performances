import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4698443161312293',
  standalone: true,
  templateUrl: './app-4698443161312293.component.html',
  styleUrl: './app-4698443161312293.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4698443161312293Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
