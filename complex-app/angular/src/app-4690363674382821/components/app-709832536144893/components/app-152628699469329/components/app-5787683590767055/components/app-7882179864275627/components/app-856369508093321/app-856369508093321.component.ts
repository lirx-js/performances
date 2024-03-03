import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-856369508093321',
  standalone: true,
  templateUrl: './app-856369508093321.component.html',
  styleUrl: './app-856369508093321.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App856369508093321Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
