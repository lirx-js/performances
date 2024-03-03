import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5776225836074309',
  standalone: true,
  templateUrl: './app-5776225836074309.component.html',
  styleUrl: './app-5776225836074309.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5776225836074309Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
