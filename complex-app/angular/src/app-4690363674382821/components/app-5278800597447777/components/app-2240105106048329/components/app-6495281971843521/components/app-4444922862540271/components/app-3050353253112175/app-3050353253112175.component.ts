import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3050353253112175',
  standalone: true,
  templateUrl: './app-3050353253112175.component.html',
  styleUrl: './app-3050353253112175.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3050353253112175Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
