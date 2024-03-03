import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1391732928605341',
  standalone: true,
  templateUrl: './app-1391732928605341.component.html',
  styleUrl: './app-1391732928605341.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1391732928605341Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
