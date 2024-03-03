import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4987784490210879',
  standalone: true,
  templateUrl: './app-4987784490210879.component.html',
  styleUrl: './app-4987784490210879.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4987784490210879Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
