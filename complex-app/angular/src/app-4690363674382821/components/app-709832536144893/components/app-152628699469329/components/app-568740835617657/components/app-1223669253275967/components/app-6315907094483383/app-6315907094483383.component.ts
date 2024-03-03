import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6315907094483383',
  standalone: true,
  templateUrl: './app-6315907094483383.component.html',
  styleUrl: './app-6315907094483383.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6315907094483383Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
