import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8790245324742903',
  standalone: true,
  templateUrl: './app-8790245324742903.component.html',
  styleUrl: './app-8790245324742903.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8790245324742903Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
