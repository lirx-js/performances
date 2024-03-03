import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-606234918063399',
  standalone: true,
  templateUrl: './app-606234918063399.component.html',
  styleUrl: './app-606234918063399.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App606234918063399Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
