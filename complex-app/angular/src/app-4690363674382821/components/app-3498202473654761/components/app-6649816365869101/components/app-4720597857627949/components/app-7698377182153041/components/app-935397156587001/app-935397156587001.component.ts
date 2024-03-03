import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-935397156587001',
  standalone: true,
  templateUrl: './app-935397156587001.component.html',
  styleUrl: './app-935397156587001.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App935397156587001Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
