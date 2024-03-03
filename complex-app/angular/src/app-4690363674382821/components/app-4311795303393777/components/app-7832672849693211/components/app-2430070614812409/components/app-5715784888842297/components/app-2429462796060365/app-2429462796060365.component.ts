import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2429462796060365',
  standalone: true,
  templateUrl: './app-2429462796060365.component.html',
  styleUrl: './app-2429462796060365.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2429462796060365Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
