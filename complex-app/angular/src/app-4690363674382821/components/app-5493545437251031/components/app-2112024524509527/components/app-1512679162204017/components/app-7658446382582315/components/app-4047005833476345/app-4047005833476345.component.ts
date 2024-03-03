import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4047005833476345',
  standalone: true,
  templateUrl: './app-4047005833476345.component.html',
  styleUrl: './app-4047005833476345.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4047005833476345Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
