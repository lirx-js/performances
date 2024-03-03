import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-869235372136595',
  standalone: true,
  templateUrl: './app-869235372136595.component.html',
  styleUrl: './app-869235372136595.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App869235372136595Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
