import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-605737797523751',
  standalone: true,
  templateUrl: './app-605737797523751.component.html',
  styleUrl: './app-605737797523751.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App605737797523751Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
