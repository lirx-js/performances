import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7926045069338803',
  standalone: true,
  templateUrl: './app-7926045069338803.component.html',
  styleUrl: './app-7926045069338803.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7926045069338803Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
