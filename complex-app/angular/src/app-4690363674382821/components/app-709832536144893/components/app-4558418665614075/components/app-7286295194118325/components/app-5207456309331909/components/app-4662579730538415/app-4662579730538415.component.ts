import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4662579730538415',
  standalone: true,
  templateUrl: './app-4662579730538415.component.html',
  styleUrl: './app-4662579730538415.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4662579730538415Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
