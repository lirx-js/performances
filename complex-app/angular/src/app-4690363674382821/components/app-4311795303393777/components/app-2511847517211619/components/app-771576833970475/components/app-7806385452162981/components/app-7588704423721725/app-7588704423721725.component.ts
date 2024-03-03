import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7588704423721725',
  standalone: true,
  templateUrl: './app-7588704423721725.component.html',
  styleUrl: './app-7588704423721725.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7588704423721725Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
