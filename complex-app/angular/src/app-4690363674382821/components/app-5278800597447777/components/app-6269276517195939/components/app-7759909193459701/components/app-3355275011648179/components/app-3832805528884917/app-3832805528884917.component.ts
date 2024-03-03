import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3832805528884917',
  standalone: true,
  templateUrl: './app-3832805528884917.component.html',
  styleUrl: './app-3832805528884917.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3832805528884917Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
