import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-38899124480561',
  standalone: true,
  templateUrl: './app-38899124480561.component.html',
  styleUrl: './app-38899124480561.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App38899124480561Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
