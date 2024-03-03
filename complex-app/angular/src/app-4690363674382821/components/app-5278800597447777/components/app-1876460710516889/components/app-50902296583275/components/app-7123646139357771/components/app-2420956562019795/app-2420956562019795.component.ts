import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2420956562019795',
  standalone: true,
  templateUrl: './app-2420956562019795.component.html',
  styleUrl: './app-2420956562019795.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2420956562019795Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
