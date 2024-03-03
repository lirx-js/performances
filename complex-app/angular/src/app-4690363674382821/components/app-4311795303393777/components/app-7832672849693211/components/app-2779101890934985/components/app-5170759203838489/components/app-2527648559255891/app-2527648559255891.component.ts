import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2527648559255891',
  standalone: true,
  templateUrl: './app-2527648559255891.component.html',
  styleUrl: './app-2527648559255891.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2527648559255891Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
