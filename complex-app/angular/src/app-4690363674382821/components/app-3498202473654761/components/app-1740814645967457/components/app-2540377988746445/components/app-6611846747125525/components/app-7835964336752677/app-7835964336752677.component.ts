import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7835964336752677',
  standalone: true,
  templateUrl: './app-7835964336752677.component.html',
  styleUrl: './app-7835964336752677.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7835964336752677Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
