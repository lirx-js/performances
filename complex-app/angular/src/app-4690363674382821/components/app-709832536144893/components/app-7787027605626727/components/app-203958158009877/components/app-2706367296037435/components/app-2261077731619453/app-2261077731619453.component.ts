import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2261077731619453',
  standalone: true,
  templateUrl: './app-2261077731619453.component.html',
  styleUrl: './app-2261077731619453.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2261077731619453Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
