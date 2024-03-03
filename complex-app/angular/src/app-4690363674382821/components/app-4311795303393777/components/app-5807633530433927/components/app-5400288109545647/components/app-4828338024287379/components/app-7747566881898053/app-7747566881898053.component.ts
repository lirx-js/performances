import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7747566881898053',
  standalone: true,
  templateUrl: './app-7747566881898053.component.html',
  styleUrl: './app-7747566881898053.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7747566881898053Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
