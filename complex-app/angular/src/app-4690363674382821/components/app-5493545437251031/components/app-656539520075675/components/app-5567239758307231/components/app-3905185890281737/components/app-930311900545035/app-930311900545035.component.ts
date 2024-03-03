import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-930311900545035',
  standalone: true,
  templateUrl: './app-930311900545035.component.html',
  styleUrl: './app-930311900545035.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App930311900545035Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
