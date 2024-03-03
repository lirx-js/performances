import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5533695341406477',
  standalone: true,
  templateUrl: './app-5533695341406477.component.html',
  styleUrl: './app-5533695341406477.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5533695341406477Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
