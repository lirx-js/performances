import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5682387505757927',
  standalone: true,
  templateUrl: './app-5682387505757927.component.html',
  styleUrl: './app-5682387505757927.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5682387505757927Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
