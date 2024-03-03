import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3400828005689243',
  standalone: true,
  templateUrl: './app-3400828005689243.component.html',
  styleUrl: './app-3400828005689243.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3400828005689243Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
