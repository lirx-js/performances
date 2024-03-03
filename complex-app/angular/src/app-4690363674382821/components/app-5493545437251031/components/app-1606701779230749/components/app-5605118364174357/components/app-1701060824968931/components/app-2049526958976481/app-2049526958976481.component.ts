import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2049526958976481',
  standalone: true,
  templateUrl: './app-2049526958976481.component.html',
  styleUrl: './app-2049526958976481.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2049526958976481Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
