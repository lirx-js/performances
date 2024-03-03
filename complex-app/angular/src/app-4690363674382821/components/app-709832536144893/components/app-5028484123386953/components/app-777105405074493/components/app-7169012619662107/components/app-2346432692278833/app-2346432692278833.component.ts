import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2346432692278833',
  standalone: true,
  templateUrl: './app-2346432692278833.component.html',
  styleUrl: './app-2346432692278833.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2346432692278833Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
