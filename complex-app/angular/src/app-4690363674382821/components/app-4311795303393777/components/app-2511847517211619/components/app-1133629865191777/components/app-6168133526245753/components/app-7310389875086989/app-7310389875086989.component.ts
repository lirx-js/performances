import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7310389875086989',
  standalone: true,
  templateUrl: './app-7310389875086989.component.html',
  styleUrl: './app-7310389875086989.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7310389875086989Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
