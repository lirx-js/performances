import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5999668237945419',
  standalone: true,
  templateUrl: './app-5999668237945419.component.html',
  styleUrl: './app-5999668237945419.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5999668237945419Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
