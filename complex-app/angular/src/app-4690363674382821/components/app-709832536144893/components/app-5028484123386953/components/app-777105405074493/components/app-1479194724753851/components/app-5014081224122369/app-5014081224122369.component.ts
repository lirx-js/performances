import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5014081224122369',
  standalone: true,
  templateUrl: './app-5014081224122369.component.html',
  styleUrl: './app-5014081224122369.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5014081224122369Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
