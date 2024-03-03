import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5751857695937783',
  standalone: true,
  templateUrl: './app-5751857695937783.component.html',
  styleUrl: './app-5751857695937783.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5751857695937783Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
