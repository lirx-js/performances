import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1648089203247339',
  standalone: true,
  templateUrl: './app-1648089203247339.component.html',
  styleUrl: './app-1648089203247339.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1648089203247339Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
