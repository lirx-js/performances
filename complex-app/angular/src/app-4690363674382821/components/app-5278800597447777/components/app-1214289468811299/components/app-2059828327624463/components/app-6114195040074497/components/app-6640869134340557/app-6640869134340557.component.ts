import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6640869134340557',
  standalone: true,
  templateUrl: './app-6640869134340557.component.html',
  styleUrl: './app-6640869134340557.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6640869134340557Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
