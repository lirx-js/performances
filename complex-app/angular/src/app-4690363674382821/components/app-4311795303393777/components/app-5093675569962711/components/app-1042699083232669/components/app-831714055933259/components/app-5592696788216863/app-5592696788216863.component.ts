import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5592696788216863',
  standalone: true,
  templateUrl: './app-5592696788216863.component.html',
  styleUrl: './app-5592696788216863.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5592696788216863Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
