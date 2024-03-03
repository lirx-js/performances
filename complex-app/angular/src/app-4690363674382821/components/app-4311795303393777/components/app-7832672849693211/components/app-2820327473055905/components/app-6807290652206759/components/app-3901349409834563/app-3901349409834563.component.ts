import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3901349409834563',
  standalone: true,
  templateUrl: './app-3901349409834563.component.html',
  styleUrl: './app-3901349409834563.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3901349409834563Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
