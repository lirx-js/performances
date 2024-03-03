import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6697896350597695',
  standalone: true,
  templateUrl: './app-6697896350597695.component.html',
  styleUrl: './app-6697896350597695.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6697896350597695Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
