import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2278783798002751',
  standalone: true,
  templateUrl: './app-2278783798002751.component.html',
  styleUrl: './app-2278783798002751.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2278783798002751Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
