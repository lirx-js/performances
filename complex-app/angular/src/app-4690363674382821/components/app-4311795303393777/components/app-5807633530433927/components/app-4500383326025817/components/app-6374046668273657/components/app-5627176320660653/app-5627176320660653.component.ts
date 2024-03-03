import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5627176320660653',
  standalone: true,
  templateUrl: './app-5627176320660653.component.html',
  styleUrl: './app-5627176320660653.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5627176320660653Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
