import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6277978239192763',
  standalone: true,
  templateUrl: './app-6277978239192763.component.html',
  styleUrl: './app-6277978239192763.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6277978239192763Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
