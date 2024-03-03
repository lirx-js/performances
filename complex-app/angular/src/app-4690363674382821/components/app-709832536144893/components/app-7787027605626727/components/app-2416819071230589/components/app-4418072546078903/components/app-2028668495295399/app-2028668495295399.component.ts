import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2028668495295399',
  standalone: true,
  templateUrl: './app-2028668495295399.component.html',
  styleUrl: './app-2028668495295399.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2028668495295399Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
