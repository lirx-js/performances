import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6026988645333037',
  standalone: true,
  templateUrl: './app-6026988645333037.component.html',
  styleUrl: './app-6026988645333037.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6026988645333037Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}