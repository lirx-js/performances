import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4360843789017923',
  standalone: true,
  templateUrl: './app-4360843789017923.component.html',
  styleUrl: './app-4360843789017923.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4360843789017923Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
