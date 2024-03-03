import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4782918543451675',
  standalone: true,
  templateUrl: './app-4782918543451675.component.html',
  styleUrl: './app-4782918543451675.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4782918543451675Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
