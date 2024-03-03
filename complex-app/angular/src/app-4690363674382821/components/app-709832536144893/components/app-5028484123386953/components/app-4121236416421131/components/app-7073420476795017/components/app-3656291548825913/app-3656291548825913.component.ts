import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3656291548825913',
  standalone: true,
  templateUrl: './app-3656291548825913.component.html',
  styleUrl: './app-3656291548825913.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3656291548825913Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
