import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8081384675443179',
  standalone: true,
  templateUrl: './app-8081384675443179.component.html',
  styleUrl: './app-8081384675443179.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8081384675443179Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
