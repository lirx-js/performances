import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4664007542819163',
  standalone: true,
  templateUrl: './app-4664007542819163.component.html',
  styleUrl: './app-4664007542819163.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4664007542819163Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
