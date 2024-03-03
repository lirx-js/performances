import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6673538868028569',
  standalone: true,
  templateUrl: './app-6673538868028569.component.html',
  styleUrl: './app-6673538868028569.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6673538868028569Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
