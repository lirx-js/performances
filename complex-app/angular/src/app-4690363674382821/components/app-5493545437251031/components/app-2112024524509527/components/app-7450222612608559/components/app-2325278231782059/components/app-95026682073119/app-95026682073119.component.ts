import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-95026682073119',
  standalone: true,
  templateUrl: './app-95026682073119.component.html',
  styleUrl: './app-95026682073119.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App95026682073119Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
