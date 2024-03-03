import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5844818311139171',
  standalone: true,
  templateUrl: './app-5844818311139171.component.html',
  styleUrl: './app-5844818311139171.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5844818311139171Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
