import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-411171321509913',
  standalone: true,
  templateUrl: './app-411171321509913.component.html',
  styleUrl: './app-411171321509913.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App411171321509913Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
