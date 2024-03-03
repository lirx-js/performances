import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3912666255829331',
  standalone: true,
  templateUrl: './app-3912666255829331.component.html',
  styleUrl: './app-3912666255829331.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3912666255829331Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
