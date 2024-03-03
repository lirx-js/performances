import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6348405529143815',
  standalone: true,
  templateUrl: './app-6348405529143815.component.html',
  styleUrl: './app-6348405529143815.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6348405529143815Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
