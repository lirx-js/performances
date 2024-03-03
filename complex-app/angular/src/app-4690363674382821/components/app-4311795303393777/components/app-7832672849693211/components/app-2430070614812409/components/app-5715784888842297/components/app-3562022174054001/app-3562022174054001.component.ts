import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3562022174054001',
  standalone: true,
  templateUrl: './app-3562022174054001.component.html',
  styleUrl: './app-3562022174054001.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3562022174054001Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
