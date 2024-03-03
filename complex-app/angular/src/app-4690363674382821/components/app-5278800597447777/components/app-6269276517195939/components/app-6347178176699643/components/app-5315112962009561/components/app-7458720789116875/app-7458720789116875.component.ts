import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7458720789116875',
  standalone: true,
  templateUrl: './app-7458720789116875.component.html',
  styleUrl: './app-7458720789116875.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7458720789116875Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
