import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6319858056320531',
  standalone: true,
  templateUrl: './app-6319858056320531.component.html',
  styleUrl: './app-6319858056320531.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6319858056320531Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
