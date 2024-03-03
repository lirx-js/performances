import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4847326002876749',
  standalone: true,
  templateUrl: './app-4847326002876749.component.html',
  styleUrl: './app-4847326002876749.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4847326002876749Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
