import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7211124899551755',
  standalone: true,
  templateUrl: './app-7211124899551755.component.html',
  styleUrl: './app-7211124899551755.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7211124899551755Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
