import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8811549391042005',
  standalone: true,
  templateUrl: './app-8811549391042005.component.html',
  styleUrl: './app-8811549391042005.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8811549391042005Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
