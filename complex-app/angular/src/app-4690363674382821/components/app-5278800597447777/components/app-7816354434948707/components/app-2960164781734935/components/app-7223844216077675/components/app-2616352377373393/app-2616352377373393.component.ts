import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2616352377373393',
  standalone: true,
  templateUrl: './app-2616352377373393.component.html',
  styleUrl: './app-2616352377373393.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2616352377373393Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
