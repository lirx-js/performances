import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5559478257966365',
  standalone: true,
  templateUrl: './app-5559478257966365.component.html',
  styleUrl: './app-5559478257966365.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5559478257966365Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
