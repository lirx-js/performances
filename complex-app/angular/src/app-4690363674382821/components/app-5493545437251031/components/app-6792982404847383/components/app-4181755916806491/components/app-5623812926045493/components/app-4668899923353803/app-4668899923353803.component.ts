import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4668899923353803',
  standalone: true,
  templateUrl: './app-4668899923353803.component.html',
  styleUrl: './app-4668899923353803.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4668899923353803Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
