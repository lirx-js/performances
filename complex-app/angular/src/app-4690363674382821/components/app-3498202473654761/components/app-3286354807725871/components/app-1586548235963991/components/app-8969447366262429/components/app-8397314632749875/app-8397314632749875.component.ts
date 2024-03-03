import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8397314632749875',
  standalone: true,
  templateUrl: './app-8397314632749875.component.html',
  styleUrl: './app-8397314632749875.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8397314632749875Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
