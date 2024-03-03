import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3039084038062785',
  standalone: true,
  templateUrl: './app-3039084038062785.component.html',
  styleUrl: './app-3039084038062785.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3039084038062785Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
