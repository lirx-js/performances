import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-718964032826697',
  standalone: true,
  templateUrl: './app-718964032826697.component.html',
  styleUrl: './app-718964032826697.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App718964032826697Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
