import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-111248281155975',
  standalone: true,
  templateUrl: './app-111248281155975.component.html',
  styleUrl: './app-111248281155975.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App111248281155975Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
