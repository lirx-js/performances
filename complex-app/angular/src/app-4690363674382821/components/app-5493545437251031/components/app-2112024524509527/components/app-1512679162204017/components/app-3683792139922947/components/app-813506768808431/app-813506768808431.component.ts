import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-813506768808431',
  standalone: true,
  templateUrl: './app-813506768808431.component.html',
  styleUrl: './app-813506768808431.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App813506768808431Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
