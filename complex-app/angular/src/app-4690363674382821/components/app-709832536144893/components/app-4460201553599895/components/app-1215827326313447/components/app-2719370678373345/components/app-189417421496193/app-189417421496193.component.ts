import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-189417421496193',
  standalone: true,
  templateUrl: './app-189417421496193.component.html',
  styleUrl: './app-189417421496193.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App189417421496193Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
