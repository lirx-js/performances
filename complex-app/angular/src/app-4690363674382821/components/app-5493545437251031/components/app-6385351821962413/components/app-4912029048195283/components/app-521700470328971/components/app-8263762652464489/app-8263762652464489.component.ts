import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8263762652464489',
  standalone: true,
  templateUrl: './app-8263762652464489.component.html',
  styleUrl: './app-8263762652464489.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8263762652464489Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
