import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6794811098123943',
  standalone: true,
  templateUrl: './app-6794811098123943.component.html',
  styleUrl: './app-6794811098123943.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6794811098123943Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
