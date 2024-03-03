import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6162659200644513',
  standalone: true,
  templateUrl: './app-6162659200644513.component.html',
  styleUrl: './app-6162659200644513.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6162659200644513Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
