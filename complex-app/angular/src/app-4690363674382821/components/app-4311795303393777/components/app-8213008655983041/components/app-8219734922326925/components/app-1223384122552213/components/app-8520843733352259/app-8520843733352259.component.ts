import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8520843733352259',
  standalone: true,
  templateUrl: './app-8520843733352259.component.html',
  styleUrl: './app-8520843733352259.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8520843733352259Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
