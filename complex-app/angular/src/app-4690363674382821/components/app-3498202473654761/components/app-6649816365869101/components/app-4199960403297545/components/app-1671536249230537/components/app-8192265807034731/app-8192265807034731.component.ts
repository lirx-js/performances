import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8192265807034731',
  standalone: true,
  templateUrl: './app-8192265807034731.component.html',
  styleUrl: './app-8192265807034731.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8192265807034731Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
