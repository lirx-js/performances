import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5045833024948115',
  standalone: true,
  templateUrl: './app-5045833024948115.component.html',
  styleUrl: './app-5045833024948115.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5045833024948115Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
