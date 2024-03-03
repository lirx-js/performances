import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6144517146116583',
  standalone: true,
  templateUrl: './app-6144517146116583.component.html',
  styleUrl: './app-6144517146116583.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6144517146116583Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
