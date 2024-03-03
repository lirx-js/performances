import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8423296119936457',
  standalone: true,
  templateUrl: './app-8423296119936457.component.html',
  styleUrl: './app-8423296119936457.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8423296119936457Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
