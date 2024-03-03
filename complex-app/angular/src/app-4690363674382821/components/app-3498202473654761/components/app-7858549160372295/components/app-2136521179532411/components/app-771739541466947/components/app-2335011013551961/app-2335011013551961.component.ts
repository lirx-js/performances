import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2335011013551961',
  standalone: true,
  templateUrl: './app-2335011013551961.component.html',
  styleUrl: './app-2335011013551961.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2335011013551961Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
