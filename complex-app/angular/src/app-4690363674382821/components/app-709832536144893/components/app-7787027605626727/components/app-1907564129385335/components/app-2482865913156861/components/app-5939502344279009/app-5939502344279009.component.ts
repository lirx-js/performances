import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5939502344279009',
  standalone: true,
  templateUrl: './app-5939502344279009.component.html',
  styleUrl: './app-5939502344279009.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5939502344279009Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
