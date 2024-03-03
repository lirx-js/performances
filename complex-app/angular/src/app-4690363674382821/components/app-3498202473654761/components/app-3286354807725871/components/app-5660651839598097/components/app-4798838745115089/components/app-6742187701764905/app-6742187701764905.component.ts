import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6742187701764905',
  standalone: true,
  templateUrl: './app-6742187701764905.component.html',
  styleUrl: './app-6742187701764905.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6742187701764905Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
