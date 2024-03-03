import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2787516832615627',
  standalone: true,
  templateUrl: './app-2787516832615627.component.html',
  styleUrl: './app-2787516832615627.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2787516832615627Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
