import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8058737557352209',
  standalone: true,
  templateUrl: './app-8058737557352209.component.html',
  styleUrl: './app-8058737557352209.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8058737557352209Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
