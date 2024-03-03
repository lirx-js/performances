import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2085662262456913',
  standalone: true,
  templateUrl: './app-2085662262456913.component.html',
  styleUrl: './app-2085662262456913.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2085662262456913Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
