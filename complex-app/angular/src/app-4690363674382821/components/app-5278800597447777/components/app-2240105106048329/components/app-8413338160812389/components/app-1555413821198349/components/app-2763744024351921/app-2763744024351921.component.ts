import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2763744024351921',
  standalone: true,
  templateUrl: './app-2763744024351921.component.html',
  styleUrl: './app-2763744024351921.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2763744024351921Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
