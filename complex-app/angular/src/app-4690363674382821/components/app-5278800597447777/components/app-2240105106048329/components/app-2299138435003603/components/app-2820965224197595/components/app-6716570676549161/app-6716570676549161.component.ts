import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6716570676549161',
  standalone: true,
  templateUrl: './app-6716570676549161.component.html',
  styleUrl: './app-6716570676549161.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6716570676549161Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}