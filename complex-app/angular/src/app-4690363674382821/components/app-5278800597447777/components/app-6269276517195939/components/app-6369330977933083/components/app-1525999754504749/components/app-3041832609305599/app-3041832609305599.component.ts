import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3041832609305599',
  standalone: true,
  templateUrl: './app-3041832609305599.component.html',
  styleUrl: './app-3041832609305599.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3041832609305599Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
