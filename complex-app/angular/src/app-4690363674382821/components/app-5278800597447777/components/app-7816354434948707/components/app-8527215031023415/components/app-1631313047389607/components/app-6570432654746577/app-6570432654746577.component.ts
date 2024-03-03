import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6570432654746577',
  standalone: true,
  templateUrl: './app-6570432654746577.component.html',
  styleUrl: './app-6570432654746577.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6570432654746577Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
