import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5309778545622661',
  standalone: true,
  templateUrl: './app-5309778545622661.component.html',
  styleUrl: './app-5309778545622661.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5309778545622661Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
