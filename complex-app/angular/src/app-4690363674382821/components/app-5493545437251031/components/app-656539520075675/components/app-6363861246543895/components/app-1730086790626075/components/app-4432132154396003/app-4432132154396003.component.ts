import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4432132154396003',
  standalone: true,
  templateUrl: './app-4432132154396003.component.html',
  styleUrl: './app-4432132154396003.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4432132154396003Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
