import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6674630742435965',
  standalone: true,
  templateUrl: './app-6674630742435965.component.html',
  styleUrl: './app-6674630742435965.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6674630742435965Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
