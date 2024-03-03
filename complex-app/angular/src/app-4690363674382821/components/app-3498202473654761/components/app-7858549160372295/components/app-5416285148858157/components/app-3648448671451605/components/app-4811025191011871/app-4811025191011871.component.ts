import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4811025191011871',
  standalone: true,
  templateUrl: './app-4811025191011871.component.html',
  styleUrl: './app-4811025191011871.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4811025191011871Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
