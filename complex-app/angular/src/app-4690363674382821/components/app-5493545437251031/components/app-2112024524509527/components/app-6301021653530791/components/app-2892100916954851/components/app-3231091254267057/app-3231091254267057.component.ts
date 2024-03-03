import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3231091254267057',
  standalone: true,
  templateUrl: './app-3231091254267057.component.html',
  styleUrl: './app-3231091254267057.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3231091254267057Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
