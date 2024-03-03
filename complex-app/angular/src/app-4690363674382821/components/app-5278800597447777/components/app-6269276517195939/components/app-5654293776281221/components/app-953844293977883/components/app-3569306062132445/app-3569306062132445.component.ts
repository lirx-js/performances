import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3569306062132445',
  standalone: true,
  templateUrl: './app-3569306062132445.component.html',
  styleUrl: './app-3569306062132445.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3569306062132445Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
