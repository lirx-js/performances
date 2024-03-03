import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5985883917261817',
  standalone: true,
  templateUrl: './app-5985883917261817.component.html',
  styleUrl: './app-5985883917261817.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5985883917261817Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
