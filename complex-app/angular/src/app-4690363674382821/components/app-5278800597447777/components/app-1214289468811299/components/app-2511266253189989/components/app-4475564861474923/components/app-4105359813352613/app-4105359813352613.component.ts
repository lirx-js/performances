import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4105359813352613',
  standalone: true,
  templateUrl: './app-4105359813352613.component.html',
  styleUrl: './app-4105359813352613.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4105359813352613Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
