import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2021187736020549',
  standalone: true,
  templateUrl: './app-2021187736020549.component.html',
  styleUrl: './app-2021187736020549.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2021187736020549Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
