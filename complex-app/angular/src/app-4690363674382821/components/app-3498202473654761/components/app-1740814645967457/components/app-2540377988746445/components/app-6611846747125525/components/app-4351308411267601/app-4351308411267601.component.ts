import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4351308411267601',
  standalone: true,
  templateUrl: './app-4351308411267601.component.html',
  styleUrl: './app-4351308411267601.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4351308411267601Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
