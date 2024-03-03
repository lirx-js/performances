import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8763136862595693',
  standalone: true,
  templateUrl: './app-8763136862595693.component.html',
  styleUrl: './app-8763136862595693.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8763136862595693Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
