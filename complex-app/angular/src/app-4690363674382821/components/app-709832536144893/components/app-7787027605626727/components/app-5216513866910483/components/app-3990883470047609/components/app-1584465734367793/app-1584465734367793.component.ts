import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1584465734367793',
  standalone: true,
  templateUrl: './app-1584465734367793.component.html',
  styleUrl: './app-1584465734367793.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1584465734367793Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
