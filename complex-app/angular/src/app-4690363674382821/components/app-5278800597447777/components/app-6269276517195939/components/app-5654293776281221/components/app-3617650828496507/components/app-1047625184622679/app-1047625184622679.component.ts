import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1047625184622679',
  standalone: true,
  templateUrl: './app-1047625184622679.component.html',
  styleUrl: './app-1047625184622679.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1047625184622679Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
