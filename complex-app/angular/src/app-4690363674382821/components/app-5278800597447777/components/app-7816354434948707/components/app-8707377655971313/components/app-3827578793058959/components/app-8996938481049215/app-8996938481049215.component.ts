import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8996938481049215',
  standalone: true,
  templateUrl: './app-8996938481049215.component.html',
  styleUrl: './app-8996938481049215.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8996938481049215Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
