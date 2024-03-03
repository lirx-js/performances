import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3644664807010981',
  standalone: true,
  templateUrl: './app-3644664807010981.component.html',
  styleUrl: './app-3644664807010981.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3644664807010981Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
