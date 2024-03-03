import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5345145375115161',
  standalone: true,
  templateUrl: './app-5345145375115161.component.html',
  styleUrl: './app-5345145375115161.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5345145375115161Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
