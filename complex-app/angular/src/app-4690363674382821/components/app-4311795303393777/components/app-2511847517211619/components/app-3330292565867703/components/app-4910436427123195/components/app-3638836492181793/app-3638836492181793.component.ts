import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3638836492181793',
  standalone: true,
  templateUrl: './app-3638836492181793.component.html',
  styleUrl: './app-3638836492181793.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3638836492181793Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
