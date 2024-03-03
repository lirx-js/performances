import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4246837953239239',
  standalone: true,
  templateUrl: './app-4246837953239239.component.html',
  styleUrl: './app-4246837953239239.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4246837953239239Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
