import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6465737096657703',
  standalone: true,
  templateUrl: './app-6465737096657703.component.html',
  styleUrl: './app-6465737096657703.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6465737096657703Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}