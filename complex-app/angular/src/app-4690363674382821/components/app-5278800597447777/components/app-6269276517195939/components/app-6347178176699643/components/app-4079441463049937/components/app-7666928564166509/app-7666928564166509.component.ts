import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7666928564166509',
  standalone: true,
  templateUrl: './app-7666928564166509.component.html',
  styleUrl: './app-7666928564166509.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7666928564166509Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
