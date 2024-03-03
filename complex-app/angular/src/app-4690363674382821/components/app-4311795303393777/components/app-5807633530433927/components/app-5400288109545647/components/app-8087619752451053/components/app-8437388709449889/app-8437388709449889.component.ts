import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8437388709449889',
  standalone: true,
  templateUrl: './app-8437388709449889.component.html',
  styleUrl: './app-8437388709449889.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8437388709449889Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
