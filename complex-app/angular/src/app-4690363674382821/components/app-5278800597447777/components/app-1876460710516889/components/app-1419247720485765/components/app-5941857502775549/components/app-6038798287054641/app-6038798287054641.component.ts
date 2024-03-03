import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6038798287054641',
  standalone: true,
  templateUrl: './app-6038798287054641.component.html',
  styleUrl: './app-6038798287054641.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6038798287054641Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
