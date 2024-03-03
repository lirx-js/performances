import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6095740452911627',
  standalone: true,
  templateUrl: './app-6095740452911627.component.html',
  styleUrl: './app-6095740452911627.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6095740452911627Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
