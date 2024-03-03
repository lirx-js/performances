import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-418098727546233',
  standalone: true,
  templateUrl: './app-418098727546233.component.html',
  styleUrl: './app-418098727546233.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App418098727546233Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
