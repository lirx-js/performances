import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2100389212965891',
  standalone: true,
  templateUrl: './app-2100389212965891.component.html',
  styleUrl: './app-2100389212965891.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2100389212965891Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
