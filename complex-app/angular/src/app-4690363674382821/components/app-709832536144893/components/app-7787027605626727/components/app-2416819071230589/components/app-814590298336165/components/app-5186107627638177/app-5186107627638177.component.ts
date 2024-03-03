import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5186107627638177',
  standalone: true,
  templateUrl: './app-5186107627638177.component.html',
  styleUrl: './app-5186107627638177.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5186107627638177Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
