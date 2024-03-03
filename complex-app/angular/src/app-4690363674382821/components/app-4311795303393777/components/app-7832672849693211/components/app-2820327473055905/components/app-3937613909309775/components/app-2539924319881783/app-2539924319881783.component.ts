import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2539924319881783',
  standalone: true,
  templateUrl: './app-2539924319881783.component.html',
  styleUrl: './app-2539924319881783.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2539924319881783Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
