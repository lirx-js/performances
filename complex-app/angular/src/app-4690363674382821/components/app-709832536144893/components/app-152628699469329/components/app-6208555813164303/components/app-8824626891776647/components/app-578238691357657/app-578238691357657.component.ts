import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-578238691357657',
  standalone: true,
  templateUrl: './app-578238691357657.component.html',
  styleUrl: './app-578238691357657.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App578238691357657Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
