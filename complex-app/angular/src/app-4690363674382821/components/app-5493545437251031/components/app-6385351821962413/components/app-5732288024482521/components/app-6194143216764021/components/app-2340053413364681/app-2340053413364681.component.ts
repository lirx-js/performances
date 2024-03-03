import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2340053413364681',
  standalone: true,
  templateUrl: './app-2340053413364681.component.html',
  styleUrl: './app-2340053413364681.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2340053413364681Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
