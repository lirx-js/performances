import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2967214950994399',
  standalone: true,
  templateUrl: './app-2967214950994399.component.html',
  styleUrl: './app-2967214950994399.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2967214950994399Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
