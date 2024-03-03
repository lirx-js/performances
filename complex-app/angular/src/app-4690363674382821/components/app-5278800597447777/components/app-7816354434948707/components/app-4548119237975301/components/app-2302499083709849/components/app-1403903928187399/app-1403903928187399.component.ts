import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1403903928187399',
  standalone: true,
  templateUrl: './app-1403903928187399.component.html',
  styleUrl: './app-1403903928187399.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1403903928187399Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
