import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-902525695369293',
  standalone: true,
  templateUrl: './app-902525695369293.component.html',
  styleUrl: './app-902525695369293.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App902525695369293Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
