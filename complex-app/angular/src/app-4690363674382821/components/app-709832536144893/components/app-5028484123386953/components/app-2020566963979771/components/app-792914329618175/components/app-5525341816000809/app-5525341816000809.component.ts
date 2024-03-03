import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5525341816000809',
  standalone: true,
  templateUrl: './app-5525341816000809.component.html',
  styleUrl: './app-5525341816000809.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5525341816000809Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
