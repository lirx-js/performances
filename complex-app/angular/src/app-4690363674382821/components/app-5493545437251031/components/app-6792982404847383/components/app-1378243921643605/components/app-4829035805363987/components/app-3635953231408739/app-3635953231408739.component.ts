import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3635953231408739',
  standalone: true,
  templateUrl: './app-3635953231408739.component.html',
  styleUrl: './app-3635953231408739.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3635953231408739Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
