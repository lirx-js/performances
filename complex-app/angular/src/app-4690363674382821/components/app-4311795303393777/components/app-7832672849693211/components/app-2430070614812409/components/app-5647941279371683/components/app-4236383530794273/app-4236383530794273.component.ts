import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4236383530794273',
  standalone: true,
  templateUrl: './app-4236383530794273.component.html',
  styleUrl: './app-4236383530794273.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4236383530794273Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
