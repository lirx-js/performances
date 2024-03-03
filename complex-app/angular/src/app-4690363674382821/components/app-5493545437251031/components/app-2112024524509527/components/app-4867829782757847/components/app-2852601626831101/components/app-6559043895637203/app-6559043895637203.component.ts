import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6559043895637203',
  standalone: true,
  templateUrl: './app-6559043895637203.component.html',
  styleUrl: './app-6559043895637203.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6559043895637203Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
