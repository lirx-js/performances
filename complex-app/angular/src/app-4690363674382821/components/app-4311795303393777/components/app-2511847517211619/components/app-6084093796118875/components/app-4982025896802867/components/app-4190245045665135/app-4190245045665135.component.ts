import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4190245045665135',
  standalone: true,
  templateUrl: './app-4190245045665135.component.html',
  styleUrl: './app-4190245045665135.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4190245045665135Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
