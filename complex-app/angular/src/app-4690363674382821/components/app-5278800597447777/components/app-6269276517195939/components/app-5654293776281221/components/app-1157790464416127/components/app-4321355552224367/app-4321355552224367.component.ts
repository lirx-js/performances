import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4321355552224367',
  standalone: true,
  templateUrl: './app-4321355552224367.component.html',
  styleUrl: './app-4321355552224367.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4321355552224367Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
