import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4723288821257631',
  standalone: true,
  templateUrl: './app-4723288821257631.component.html',
  styleUrl: './app-4723288821257631.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4723288821257631Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
