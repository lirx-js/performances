import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2567328828354369',
  standalone: true,
  templateUrl: './app-2567328828354369.component.html',
  styleUrl: './app-2567328828354369.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2567328828354369Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
