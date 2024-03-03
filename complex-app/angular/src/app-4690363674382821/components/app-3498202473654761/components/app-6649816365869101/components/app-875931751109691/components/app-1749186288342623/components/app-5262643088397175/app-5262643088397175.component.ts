import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5262643088397175',
  standalone: true,
  templateUrl: './app-5262643088397175.component.html',
  styleUrl: './app-5262643088397175.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5262643088397175Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
