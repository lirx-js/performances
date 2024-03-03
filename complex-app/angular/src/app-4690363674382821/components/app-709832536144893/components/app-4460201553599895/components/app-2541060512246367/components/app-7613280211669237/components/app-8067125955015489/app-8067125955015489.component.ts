import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8067125955015489',
  standalone: true,
  templateUrl: './app-8067125955015489.component.html',
  styleUrl: './app-8067125955015489.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8067125955015489Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
