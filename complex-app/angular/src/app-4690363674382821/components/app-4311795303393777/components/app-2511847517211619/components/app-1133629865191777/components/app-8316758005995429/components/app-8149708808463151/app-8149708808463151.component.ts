import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8149708808463151',
  standalone: true,
  templateUrl: './app-8149708808463151.component.html',
  styleUrl: './app-8149708808463151.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8149708808463151Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
