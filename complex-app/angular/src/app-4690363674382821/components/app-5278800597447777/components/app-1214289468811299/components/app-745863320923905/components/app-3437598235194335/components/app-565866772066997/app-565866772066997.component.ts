import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-565866772066997',
  standalone: true,
  templateUrl: './app-565866772066997.component.html',
  styleUrl: './app-565866772066997.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App565866772066997Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
