import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4502418406089075',
  standalone: true,
  templateUrl: './app-4502418406089075.component.html',
  styleUrl: './app-4502418406089075.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4502418406089075Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
