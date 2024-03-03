import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-926002281663389',
  standalone: true,
  templateUrl: './app-926002281663389.component.html',
  styleUrl: './app-926002281663389.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App926002281663389Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
