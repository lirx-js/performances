import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8925639795159977',
  standalone: true,
  templateUrl: './app-8925639795159977.component.html',
  styleUrl: './app-8925639795159977.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8925639795159977Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
