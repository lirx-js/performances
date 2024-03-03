import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6534538429899479',
  standalone: true,
  templateUrl: './app-6534538429899479.component.html',
  styleUrl: './app-6534538429899479.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6534538429899479Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
