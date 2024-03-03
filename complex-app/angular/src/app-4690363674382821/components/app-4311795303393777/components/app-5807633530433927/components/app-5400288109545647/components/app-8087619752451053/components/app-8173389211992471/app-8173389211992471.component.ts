import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8173389211992471',
  standalone: true,
  templateUrl: './app-8173389211992471.component.html',
  styleUrl: './app-8173389211992471.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8173389211992471Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
