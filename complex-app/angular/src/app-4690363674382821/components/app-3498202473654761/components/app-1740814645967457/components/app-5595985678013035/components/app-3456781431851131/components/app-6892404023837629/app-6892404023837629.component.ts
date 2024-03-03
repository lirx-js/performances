import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6892404023837629',
  standalone: true,
  templateUrl: './app-6892404023837629.component.html',
  styleUrl: './app-6892404023837629.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6892404023837629Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
