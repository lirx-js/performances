import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8206034373729169',
  standalone: true,
  templateUrl: './app-8206034373729169.component.html',
  styleUrl: './app-8206034373729169.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8206034373729169Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
