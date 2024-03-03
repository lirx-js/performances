import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3051723039682491',
  standalone: true,
  templateUrl: './app-3051723039682491.component.html',
  styleUrl: './app-3051723039682491.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3051723039682491Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
