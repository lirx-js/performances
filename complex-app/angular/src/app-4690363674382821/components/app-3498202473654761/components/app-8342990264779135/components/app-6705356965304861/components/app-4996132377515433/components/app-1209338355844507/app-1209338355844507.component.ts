import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1209338355844507',
  standalone: true,
  templateUrl: './app-1209338355844507.component.html',
  styleUrl: './app-1209338355844507.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1209338355844507Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
