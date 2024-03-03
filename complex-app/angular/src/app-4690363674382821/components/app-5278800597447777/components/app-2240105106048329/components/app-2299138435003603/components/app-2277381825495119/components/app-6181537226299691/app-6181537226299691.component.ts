import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6181537226299691',
  standalone: true,
  templateUrl: './app-6181537226299691.component.html',
  styleUrl: './app-6181537226299691.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6181537226299691Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
