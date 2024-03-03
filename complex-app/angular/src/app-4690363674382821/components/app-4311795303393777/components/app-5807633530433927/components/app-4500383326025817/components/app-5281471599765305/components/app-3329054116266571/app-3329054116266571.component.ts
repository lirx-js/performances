import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3329054116266571',
  standalone: true,
  templateUrl: './app-3329054116266571.component.html',
  styleUrl: './app-3329054116266571.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3329054116266571Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
