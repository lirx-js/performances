import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2435425035216673',
  standalone: true,
  templateUrl: './app-2435425035216673.component.html',
  styleUrl: './app-2435425035216673.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2435425035216673Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
