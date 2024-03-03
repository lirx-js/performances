import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-549089740173865',
  standalone: true,
  templateUrl: './app-549089740173865.component.html',
  styleUrl: './app-549089740173865.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App549089740173865Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
