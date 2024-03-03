import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7401366447052953',
  standalone: true,
  templateUrl: './app-7401366447052953.component.html',
  styleUrl: './app-7401366447052953.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7401366447052953Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
