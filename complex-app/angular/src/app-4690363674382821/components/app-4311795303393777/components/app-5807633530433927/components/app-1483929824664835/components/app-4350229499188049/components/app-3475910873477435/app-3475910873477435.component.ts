import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3475910873477435',
  standalone: true,
  templateUrl: './app-3475910873477435.component.html',
  styleUrl: './app-3475910873477435.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3475910873477435Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
