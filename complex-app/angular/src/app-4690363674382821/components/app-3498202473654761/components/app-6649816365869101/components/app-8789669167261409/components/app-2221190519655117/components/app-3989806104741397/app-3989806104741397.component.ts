import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3989806104741397',
  standalone: true,
  templateUrl: './app-3989806104741397.component.html',
  styleUrl: './app-3989806104741397.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3989806104741397Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
