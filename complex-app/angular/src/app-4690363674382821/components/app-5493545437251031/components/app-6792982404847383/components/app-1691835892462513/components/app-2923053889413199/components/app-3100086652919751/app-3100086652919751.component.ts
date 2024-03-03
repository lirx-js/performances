import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3100086652919751',
  standalone: true,
  templateUrl: './app-3100086652919751.component.html',
  styleUrl: './app-3100086652919751.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3100086652919751Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
