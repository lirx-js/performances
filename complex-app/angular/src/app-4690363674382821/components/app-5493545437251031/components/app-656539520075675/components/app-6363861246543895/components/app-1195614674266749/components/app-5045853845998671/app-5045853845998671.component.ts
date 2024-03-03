import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5045853845998671',
  standalone: true,
  templateUrl: './app-5045853845998671.component.html',
  styleUrl: './app-5045853845998671.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5045853845998671Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
