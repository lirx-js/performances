import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4529019625525543',
  standalone: true,
  templateUrl: './app-4529019625525543.component.html',
  styleUrl: './app-4529019625525543.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4529019625525543Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
