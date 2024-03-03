import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5834705664232007',
  standalone: true,
  templateUrl: './app-5834705664232007.component.html',
  styleUrl: './app-5834705664232007.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5834705664232007Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
