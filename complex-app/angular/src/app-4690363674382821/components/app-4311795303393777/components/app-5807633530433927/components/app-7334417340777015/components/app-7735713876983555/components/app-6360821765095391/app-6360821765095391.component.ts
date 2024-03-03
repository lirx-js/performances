import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6360821765095391',
  standalone: true,
  templateUrl: './app-6360821765095391.component.html',
  styleUrl: './app-6360821765095391.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6360821765095391Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
