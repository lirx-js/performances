import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6766902987432351',
  standalone: true,
  templateUrl: './app-6766902987432351.component.html',
  styleUrl: './app-6766902987432351.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6766902987432351Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
