import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2617345392876157',
  standalone: true,
  templateUrl: './app-2617345392876157.component.html',
  styleUrl: './app-2617345392876157.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2617345392876157Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
