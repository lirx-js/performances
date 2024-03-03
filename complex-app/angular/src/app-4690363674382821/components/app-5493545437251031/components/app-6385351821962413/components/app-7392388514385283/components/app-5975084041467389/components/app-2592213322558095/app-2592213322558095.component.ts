import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2592213322558095',
  standalone: true,
  templateUrl: './app-2592213322558095.component.html',
  styleUrl: './app-2592213322558095.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2592213322558095Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
