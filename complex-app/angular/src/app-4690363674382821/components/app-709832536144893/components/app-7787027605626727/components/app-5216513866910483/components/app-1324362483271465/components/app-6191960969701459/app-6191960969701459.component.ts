import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6191960969701459',
  standalone: true,
  templateUrl: './app-6191960969701459.component.html',
  styleUrl: './app-6191960969701459.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6191960969701459Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
