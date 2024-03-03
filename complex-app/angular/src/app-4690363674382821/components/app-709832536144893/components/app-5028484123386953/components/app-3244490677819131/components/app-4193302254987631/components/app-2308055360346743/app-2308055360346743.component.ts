import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2308055360346743',
  standalone: true,
  templateUrl: './app-2308055360346743.component.html',
  styleUrl: './app-2308055360346743.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2308055360346743Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
