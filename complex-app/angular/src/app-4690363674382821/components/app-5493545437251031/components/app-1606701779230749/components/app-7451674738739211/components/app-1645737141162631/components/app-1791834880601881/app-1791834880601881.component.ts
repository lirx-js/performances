import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1791834880601881',
  standalone: true,
  templateUrl: './app-1791834880601881.component.html',
  styleUrl: './app-1791834880601881.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1791834880601881Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
