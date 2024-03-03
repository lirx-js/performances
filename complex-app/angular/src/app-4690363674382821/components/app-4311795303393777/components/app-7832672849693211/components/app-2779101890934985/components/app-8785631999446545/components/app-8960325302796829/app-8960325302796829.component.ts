import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8960325302796829',
  standalone: true,
  templateUrl: './app-8960325302796829.component.html',
  styleUrl: './app-8960325302796829.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8960325302796829Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
