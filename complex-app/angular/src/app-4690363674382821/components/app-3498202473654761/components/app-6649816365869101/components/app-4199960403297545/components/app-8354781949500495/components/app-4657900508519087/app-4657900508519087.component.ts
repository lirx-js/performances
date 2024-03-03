import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4657900508519087',
  standalone: true,
  templateUrl: './app-4657900508519087.component.html',
  styleUrl: './app-4657900508519087.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4657900508519087Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
