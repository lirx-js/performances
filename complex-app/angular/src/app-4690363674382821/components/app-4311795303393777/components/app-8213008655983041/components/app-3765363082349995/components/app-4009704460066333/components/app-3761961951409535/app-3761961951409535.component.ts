import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3761961951409535',
  standalone: true,
  templateUrl: './app-3761961951409535.component.html',
  styleUrl: './app-3761961951409535.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3761961951409535Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
