import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8379387392320731',
  standalone: true,
  templateUrl: './app-8379387392320731.component.html',
  styleUrl: './app-8379387392320731.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8379387392320731Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
