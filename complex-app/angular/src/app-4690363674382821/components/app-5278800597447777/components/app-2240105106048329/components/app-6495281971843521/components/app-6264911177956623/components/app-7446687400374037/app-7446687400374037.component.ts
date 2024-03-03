import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7446687400374037',
  standalone: true,
  templateUrl: './app-7446687400374037.component.html',
  styleUrl: './app-7446687400374037.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7446687400374037Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
