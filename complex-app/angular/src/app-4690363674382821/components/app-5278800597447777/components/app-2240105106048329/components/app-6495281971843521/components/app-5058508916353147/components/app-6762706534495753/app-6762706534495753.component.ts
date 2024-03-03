import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6762706534495753',
  standalone: true,
  templateUrl: './app-6762706534495753.component.html',
  styleUrl: './app-6762706534495753.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6762706534495753Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
