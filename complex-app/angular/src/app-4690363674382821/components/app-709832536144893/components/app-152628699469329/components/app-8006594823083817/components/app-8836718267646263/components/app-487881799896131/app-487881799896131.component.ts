import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-487881799896131',
  standalone: true,
  templateUrl: './app-487881799896131.component.html',
  styleUrl: './app-487881799896131.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App487881799896131Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
