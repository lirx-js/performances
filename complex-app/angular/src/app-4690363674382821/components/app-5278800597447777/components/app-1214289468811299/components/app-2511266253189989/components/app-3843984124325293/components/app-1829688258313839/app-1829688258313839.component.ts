import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1829688258313839',
  standalone: true,
  templateUrl: './app-1829688258313839.component.html',
  styleUrl: './app-1829688258313839.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1829688258313839Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
