import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-656969400229461',
  standalone: true,
  templateUrl: './app-656969400229461.component.html',
  styleUrl: './app-656969400229461.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App656969400229461Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
