import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6769459734194621',
  standalone: true,
  templateUrl: './app-6769459734194621.component.html',
  styleUrl: './app-6769459734194621.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6769459734194621Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
