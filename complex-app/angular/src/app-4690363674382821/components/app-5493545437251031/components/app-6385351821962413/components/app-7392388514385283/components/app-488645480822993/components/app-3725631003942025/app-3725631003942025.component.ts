import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3725631003942025',
  standalone: true,
  templateUrl: './app-3725631003942025.component.html',
  styleUrl: './app-3725631003942025.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3725631003942025Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
