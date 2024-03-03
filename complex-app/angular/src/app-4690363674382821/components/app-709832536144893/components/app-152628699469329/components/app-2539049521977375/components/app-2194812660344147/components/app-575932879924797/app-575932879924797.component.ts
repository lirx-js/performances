import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-575932879924797',
  standalone: true,
  templateUrl: './app-575932879924797.component.html',
  styleUrl: './app-575932879924797.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App575932879924797Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
