import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6467885209078295',
  standalone: true,
  templateUrl: './app-6467885209078295.component.html',
  styleUrl: './app-6467885209078295.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6467885209078295Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
