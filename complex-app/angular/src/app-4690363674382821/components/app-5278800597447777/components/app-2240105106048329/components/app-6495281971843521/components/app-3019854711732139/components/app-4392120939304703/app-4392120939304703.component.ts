import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4392120939304703',
  standalone: true,
  templateUrl: './app-4392120939304703.component.html',
  styleUrl: './app-4392120939304703.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4392120939304703Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
