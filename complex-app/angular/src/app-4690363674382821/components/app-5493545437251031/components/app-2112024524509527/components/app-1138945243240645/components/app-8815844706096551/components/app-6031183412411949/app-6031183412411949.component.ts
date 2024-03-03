import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6031183412411949',
  standalone: true,
  templateUrl: './app-6031183412411949.component.html',
  styleUrl: './app-6031183412411949.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6031183412411949Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
