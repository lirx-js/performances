import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3227448941537751',
  standalone: true,
  templateUrl: './app-3227448941537751.component.html',
  styleUrl: './app-3227448941537751.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3227448941537751Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
