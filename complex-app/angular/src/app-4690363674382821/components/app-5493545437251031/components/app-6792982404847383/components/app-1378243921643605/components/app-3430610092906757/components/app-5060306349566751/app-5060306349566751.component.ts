import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5060306349566751',
  standalone: true,
  templateUrl: './app-5060306349566751.component.html',
  styleUrl: './app-5060306349566751.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5060306349566751Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
